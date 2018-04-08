import { Component, OnInit } from '@angular/core';
import { Link } from '../types';
import * as graphqlQuery from '../graphql';
import { Apollo } from 'apollo-angular';

@Component({
  selector: 'app-link-list',
  templateUrl: './link-list.component.html',
  styleUrls: ['./link-list.component.css']
})
export class LinkListComponent implements OnInit {

  // 2
  allLinks: Link[] = [];
  loading: boolean = true;

  constructor(private apolloService: Apollo) { }

  ngOnInit() {
    this.apolloService.watchQuery({
      query: graphqlQuery.ALL_LINKS_QUERY
    }).valueChanges.subscribe(response=>{
        this.allLinks = response.data.allLinks;
        this.loading = response.data.loading;
    });
  }

}
