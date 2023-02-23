/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { PostDto } from '../models/post-dto';
@Injectable({
  providedIn: 'root',
})
class PostsService extends __BaseService {
  static readonly findAllPath = '/api/posts/all';
  static readonly savePath = '/api/posts/create';
  static readonly deletePath = '/api/posts/delete/{idpost}';
  static readonly findByIdPath = '/api/posts/get/{idpost}';
  static readonly updatePath = '/api/posts/update/{idpost}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Renvoi la liste des posts
   *
   * Cette methode permet de chercher et renvoyer la liste des posts qui existent dans la BDD
   * @return La liste des posts / Une liste vide
   */
  findAllResponse(): __Observable<__StrictHttpResponse<Array<PostDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/posts/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<PostDto>>;
      })
    );
  }
  /**
   * Renvoi la liste des posts
   *
   * Cette methode permet de chercher et renvoyer la liste des posts qui existent dans la BDD
   * @return La liste des posts / Une liste vide
   */
  findAll(): __Observable<Array<PostDto>> {
    return this.findAllResponse().pipe(
      __map(_r => _r.body as Array<PostDto>)
    );
  }

  /**
   * Enregistrer un post
   *
   * Cette methode permet d'enregistrer un post
   * @param body undefined
   * @return L'objet post crée
   */
  saveResponse(body?: PostDto): __Observable<__StrictHttpResponse<PostDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/posts/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PostDto>;
      })
    );
  }
  /**
   * Enregistrer un post
   *
   * Cette methode permet d'enregistrer un post
   * @param body undefined
   * @return L'objet post crée
   */
  save(body?: PostDto): __Observable<PostDto> {
    return this.saveResponse(body).pipe(
      __map(_r => _r.body as PostDto)
    );
  }

  /**
   * Supprimer un post
   *
   * Cette methode permet de supprimer un post par ID
   * @param idpost undefined
   */
  deleteResponse(idpost: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/posts/delete/${encodeURIComponent(String(idpost))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * Supprimer un post
   *
   * Cette methode permet de supprimer un post par ID
   * @param idpost undefined
   */
  delete(idpost: number): __Observable<null> {
    return this.deleteResponse(idpost).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Rechercher un post par ID
   *
   * Cette methode permet de chercher un post par son ID
   * @param idpost undefined
   * @return post a ete trouve dans la BDD
   */
  findByIdResponse(idpost: number): __Observable<__StrictHttpResponse<PostDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/posts/get/${encodeURIComponent(String(idpost))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PostDto>;
      })
    );
  }
  /**
   * Rechercher un post par ID
   *
   * Cette methode permet de chercher un post par son ID
   * @param idpost undefined
   * @return post a ete trouve dans la BDD
   */
  findById(idpost: number): __Observable<PostDto> {
    return this.findByIdResponse(idpost).pipe(
      __map(_r => _r.body as PostDto)
    );
  }

  /**
   * modifier un aliment
   *
   * Cette methode permet de modifier un post
   * @param params The `PostsService.UpdateParams` containing the following parameters:
   *
   * - `idpost`:
   *
   * - `body`:
   *
   * @return L'objet post été modifié
   */
  updateResponse(params: PostsService.UpdateParams): __Observable<__StrictHttpResponse<PostDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.body;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/posts/update/${encodeURIComponent(String(params.idpost))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PostDto>;
      })
    );
  }
  /**
   * modifier un aliment
   *
   * Cette methode permet de modifier un post
   * @param params The `PostsService.UpdateParams` containing the following parameters:
   *
   * - `idpost`:
   *
   * - `body`:
   *
   * @return L'objet post été modifié
   */
  update(params: PostsService.UpdateParams): __Observable<PostDto> {
    return this.updateResponse(params).pipe(
      __map(_r => _r.body as PostDto)
    );
  }
}

module PostsService {

  /**
   * Parameters for update
   */
  export interface UpdateParams {
    idpost: number;
    body?: PostDto;
  }
}

export { PostsService }
