export class Videogame {
  title: String;
  publisher: String;
  year_released: Number;
  description: String;
  genres: String[];
  modes: [{
    single_player: Boolean;
    multi_player: Boolean;
    local_co_op: Boolean;
  }];
  img_ns: String;
  available_on: [{
    platform_name: String;
    compatible_with: [{
      platform_name: String;
      party_join: Boolean;
      server_join: Boolean;
    }];
    playable: Number;
    unplayable: Number;
  }];
}
