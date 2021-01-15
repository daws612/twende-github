import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { environment } from 'environments/environment';
import { Repositories } from 'app/models/Repositories';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient,
    private firestore: AngularFirestore) { }

  repositories: any = new Array<Repositories>();
  repositories$: BehaviorSubject<Repositories>;

  getRepositories(): Observable<Repositories> {
    const requestUrl = `https://api.github.com/search/repositories?q=stars:%3E1&sort=stars&per_page=10&page=1`;
    return this.http.get<Repositories>(requestUrl, {});
  }

  createOrUpdateRepoData(data): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      const docRef = this.firestore.collection("repo", ref => ref.where('id', '==', data.id));
      docRef.get().subscribe(doc => {
        if (!doc.empty) {
          doc.forEach(documentSnapshot => {
            this.firestore
              .collection("repo")
              .doc(documentSnapshot.id)
              .update({ is_favorite: data.is_favorite })
              .then(res => { console.log('res'); resolve(res) }).catch(err => reject(err));
          })
        } else {
          return this.firestore
            .collection("repo")
            .add(data)
            .then(res => { console.log('res'); resolve(res) }).catch(err => reject(err));
        }
      });
    });
  }

  getRepos() { 
    return this.firestore.collection("repo").snapshotChanges();
  }
}
