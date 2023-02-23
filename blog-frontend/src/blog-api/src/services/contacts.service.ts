/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Contact } from '../models/contact';
@Injectable({
  providedIn: 'root',
})
class ContactsService extends __BaseService {
  static readonly findAllPath = '/api/contacts/all';
  static readonly savePath = '/api/contacts/create';
  static readonly deletePath = '/api/contacts/delete/{idcontact}';
  static readonly findByIdPath = '/api/contacts/get/{idcontact}';
  static readonly updateFoodPath = '/api/contacts/update/{idcontact}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Renvoi la liste des contacts
   *
   * Cette methode permet de chercher et renvoyer la liste des contacts qui existent dans la BDD
   * @return La liste des contacts / Une liste vide
   */
  findAllResponse(): __Observable<__StrictHttpResponse<Array<Contact>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/contacts/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Contact>>;
      })
    );
  }
  /**
   * Renvoi la liste des contacts
   *
   * Cette methode permet de chercher et renvoyer la liste des contacts qui existent dans la BDD
   * @return La liste des contacts / Une liste vide
   */
  findAll(): __Observable<Array<Contact>> {
    return this.findAllResponse().pipe(
      __map(_r => _r.body as Array<Contact>)
    );
  }

  /**
   * Enregistrer un contact
   *
   * Cette methode permet d'enregistrer un contact
   * @param body undefined
   * @return L'objet contact crée
   */
  saveResponse(body?: Contact): __Observable<__StrictHttpResponse<Contact>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/contacts/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Contact>;
      })
    );
  }
  /**
   * Enregistrer un contact
   *
   * Cette methode permet d'enregistrer un contact
   * @param body undefined
   * @return L'objet contact crée
   */
  save(body?: Contact): __Observable<Contact> {
    return this.saveResponse(body).pipe(
      __map(_r => _r.body as Contact)
    );
  }

  /**
   * Supprimer un contact
   *
   * Cette methode permet de supprimer un contact par ID
   * @param idcontact undefined
   */
  deleteResponse(idcontact: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/contacts/delete/${encodeURIComponent(String(idcontact))}`,
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
   * Supprimer un contact
   *
   * Cette methode permet de supprimer un contact par ID
   * @param idcontact undefined
   */
  delete(idcontact: number): __Observable<null> {
    return this.deleteResponse(idcontact).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Rechercher un contact par ID
   *
   * Cette methode permet de chercher un contact par son ID
   * @param idcontact undefined
   * @return contact a ete trouve dans la BDD
   */
  findByIdResponse(idcontact: number): __Observable<__StrictHttpResponse<Contact>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/contacts/get/${encodeURIComponent(String(idcontact))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Contact>;
      })
    );
  }
  /**
   * Rechercher un contact par ID
   *
   * Cette methode permet de chercher un contact par son ID
   * @param idcontact undefined
   * @return contact a ete trouve dans la BDD
   */
  findById(idcontact: number): __Observable<Contact> {
    return this.findByIdResponse(idcontact).pipe(
      __map(_r => _r.body as Contact)
    );
  }

  /**
   * modifier un contact
   *
   * Cette methode permet de modifier un contact
   * @param params The `ContactsService.UpdateFoodParams` containing the following parameters:
   *
   * - `idcontact`:
   *
   * - `body`:
   *
   * @return L'objet contact a été modifié
   */
  updateFoodResponse(params: ContactsService.UpdateFoodParams): __Observable<__StrictHttpResponse<Contact>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.body;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/contacts/update/${encodeURIComponent(String(params.idcontact))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Contact>;
      })
    );
  }
  /**
   * modifier un contact
   *
   * Cette methode permet de modifier un contact
   * @param params The `ContactsService.UpdateFoodParams` containing the following parameters:
   *
   * - `idcontact`:
   *
   * - `body`:
   *
   * @return L'objet contact a été modifié
   */
  updateFood(params: ContactsService.UpdateFoodParams): __Observable<Contact> {
    return this.updateFoodResponse(params).pipe(
      __map(_r => _r.body as Contact)
    );
  }
}

module ContactsService {

  /**
   * Parameters for updateFood
   */
  export interface UpdateFoodParams {
    idcontact: number;
    body?: Contact;
  }
}

export { ContactsService }
