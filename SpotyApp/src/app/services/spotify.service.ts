import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) { }
  // httpClient se encarga de el de una pagina web

  private headers:HttpHeaders = new HttpHeaders ({
   
    //Se debe actualizar el token con PostMan
    'Authorization': 'Bearer BQDn3cP5j8jV1dy5ddj0cS0M_HM2CdR1CTqB0esGfqhhOL1xzEJLDTog1uhG5ql6oqmzNzstmGdIgqAGx4o'
  })

  private URL:string= 'https://api.spotify.com/v1'

  public GetNewRelases(){

    return this.http.get(`${this.URL}/browse/new-releases?country=MX&limit=10`,{headers:this.headers});

  }

  public searchdata(termino,type){
    // encodeURI decodifica el string a modo de URL. 
    termino = encodeURI(termino);
    let urlSend:string= `${this.URL}/search?q=${termino}&type=${type}&market=MX&limit=9`;
    return this.http.get(urlSend,{headers:this.headers})
  }

  public getTopTrackArtist(idArtist){
    let urlSend=`${this.URL}/artists/${idArtist}/top-tracks?country=MX`
    return this.http.get(urlSend,{headers:this.headers})
  }

  public getArtist(idArtist){
    let urlSend=`${this.URL}/artists/${idArtist}`
    return this.http.get(urlSend,{headers:this.headers})
  }
}
