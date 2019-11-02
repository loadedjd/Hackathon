
export class HomeScreen {
  public title: string;
  public data: Data[];
  constructor() {
    this.data = [];
  }
}

export class Data {
  public title: string;
  public unit: string;
  public value: string;
}


export class Section {
  public title: string;
  public data: Data[];

  constructor(title: string, data: Data[]) {
    this.title = title;
    this.data = data;
  }
}

export class Building {
  public title: string;
  public location: string;

  constructor(title: string, location: string) {
    this.title = title;
    this.location = location;
  }
}


