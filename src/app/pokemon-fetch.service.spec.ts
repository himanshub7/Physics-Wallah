import { TestBed } from '@angular/core/testing';

import { PokemonFetchService } from './pokemon-fetch.service';

describe('PokemonFetchService', () => {
  let service: PokemonFetchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonFetchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
