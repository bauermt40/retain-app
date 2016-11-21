import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

export class NoteService {
    constructor(private api: ApiService) {}
}