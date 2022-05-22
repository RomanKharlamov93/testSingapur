import {Action, Selector, State, StateContext} from "@ngxs/store";
import {PhotoPageStateModel} from "./photo.state-model";
import {Injectable} from "@angular/core";
import {Photo} from "../Photo-page";
import {GetAllPhotos, GetPhotoById} from "./photo.action";
import {Observable} from "rxjs";
import {HttpResponse} from "@angular/common/http";
import {PhotoPageService} from "../services/photo-page.service";
import {tap} from "rxjs/operators";
import {patch} from "@ngxs/store/operators";

@State<PhotoPageStateModel>({
  name: 'photo',
  defaults: new PhotoPageStateModel(),
  children: []
})

@Injectable()

export class PhotoState {

  constructor(private photoPageService: PhotoPageService) {
  }

  @Selector()
  static getAllPhotos(state: PhotoPageStateModel): Photo[] | null {
    return state.photos
  }

  @Selector()
  static getPhotoById(state: PhotoPageStateModel): Photo {
    return state.photo
  }

  @Action(GetAllPhotos)
  getAllPhotos(ctx: StateContext<PhotoPageStateModel>, { params }: GetAllPhotos): Observable<HttpResponse<Photo[]>> {
    return this.photoPageService.getAllPhotos(params).pipe(
      tap((response: HttpResponse<Photo[]>) => {
        ctx.setState(patch<PhotoPageStateModel>({
          photos: response.body
        }))
      })
    )
  }

  @Action(GetPhotoById)
  getPhotoById(ctx: StateContext<PhotoPageStateModel>, { photoId }: GetPhotoById): Observable<Photo> {
    return this.photoPageService.getPhotoById(photoId).pipe(
      tap((response: Photo) => {
        ctx.setState(patch<PhotoPageStateModel>({
          photo: response
        }))
      })
    )
  }
}
