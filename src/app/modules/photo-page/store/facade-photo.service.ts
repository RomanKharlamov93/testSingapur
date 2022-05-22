import {Injectable} from "@angular/core";
import {Select} from "@ngxs/store";
import {PhotoState} from "./photo.state";
import {Observable} from "rxjs";
import {Photo} from "../Photo-page";
import {Dispatch} from "@ngxs-labs/dispatch-decorator";
import {GetAllPhotos, GetPhotoById} from "./photo.action";

@Injectable({providedIn: 'root'})

export class FacadePhotoService {
  @Select(PhotoState.getAllPhotos) photos$!: Observable<Photo[]>;
  @Select(PhotoState.getPhotoById) photoById$!: Observable<Photo[]>;

  @Dispatch()
  getAllPhotos = (params?: any) => new GetAllPhotos(params)

  @Dispatch()
  getPhotoById = (photoId: number) => new GetPhotoById(photoId)
 }
