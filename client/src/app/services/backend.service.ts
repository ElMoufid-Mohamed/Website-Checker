import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResult } from '../interfaces/WhoIsResult';

@Injectable({
  providedIn: 'root'
})
export class BackendService
{
  private requestUrl: string = "http://188.166.16.160:5000/api/";

  constructor(public http: HttpClient) { }

  GetWhoIsInformation(target: string)
  {
    const url = this.requestUrl + 'whois/' + target;
    return this.http.get<ApiResult>(url).toPromise();
  }

  GetCookies(target: string)
  {
    const url = this.requestUrl + 'cookies/' + target;
    return this.http.get<any>(url).toPromise();
  }

  GetCertificate(target: string)
  {
    const url = this.requestUrl + 'certificate/' + target;
    return this.http.get<any>(url).toPromise();
  }

  GetNSLookup(target: string)
  {
    const url = this.requestUrl + 'nslookup/' + target;
    return this.http.get<any>(url).toPromise();
  }

  GetScrapedWebsite(target: string)
  {
    const url = this.requestUrl + 'scraper/' + target;
    return this.http.get<any>(url).toPromise();
  }

  PingWebsite(target: string)
  {
    const url = this.requestUrl + 'ping/' + target;
    return this.http.get<any>(url).toPromise();
  }

  GetWappAnalyzerResult(target: string)
  {
    const url = this.requestUrl + 'wappanalyzer/' + target;
    return this.http.get<any>(url).toPromise();
  };

}
