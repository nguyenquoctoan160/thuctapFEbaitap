export class AuthorSearch {
  numFound: number; // Số lượng tìm thấy\
  start: number; // Index phần tử đầu tiên
  numFoundExact: boolean;
  docs: DocAboutAuthor[];


  constructor(numFound: number, start: number, numFoundExact: boolean, docs: DocAboutAuthor[]) {
    this.numFound = numFound;
    this.start = start;
    this.numFoundExact = numFoundExact;
    this.docs = docs;
  }
}


export class DocAboutAuthor {
  key: string;
  type: string;
  name: string;
  alternate_names?: string[];
  birth_date?: string;
  death_date?: string;
  top_work: string;
  work_count: number;
  top_subjects?: string[];
  _version_: number;

  constructor(key: string, type: string, name: string, alternate_names: string[], birth_date: string, death_date: string, top_work: string, work_count: number, top_subjects: string[], version_: number) {
    this.key = key;
    this.type = type;
    this.name = name;
    this.alternate_names = alternate_names;
    this.birth_date = birth_date;
    this.death_date = death_date;
    this.top_work = top_work;
    this.work_count = work_count;
    this.top_subjects = top_subjects;
    this._version_ = version_;
  }
}
export class AuthorDetail {

  name: string;
  personal_name: string;
  death_date: string;
  alternate_names: string[];
  created: CreatedTime;
  last_modified: CreatedTime;
  latest_revision: number;
  key: string;
  birth_date: string;
  revision: number;
  type: string;
  remote_ids: RemoteIDS; // Có thể bỏ qua

  constructor(name: string, personal_name: string, death_date: string, alternate_names: string[], created: CreatedTime, last_modified: CreatedTime, latest_revision: number, key: string, birth_date: string, revision: number, type: string, remote_ids: RemoteIDS) {
    this.name = name;
    this.personal_name = personal_name;
    this.death_date = death_date;
    this.alternate_names = alternate_names;
    this.created = created;
    this.last_modified = last_modified;
    this.latest_revision = latest_revision;
    this.key = key;
    this.birth_date = birth_date;
    this.revision = revision;
    this.type = type;
    this.remote_ids = remote_ids;
  }
}

export class CreatedTime {

  type: string;
  value: Date;

  constructor(type: string, value: Date) {
    this.type = type;
    this.value = value;
  }
}
export class RemoteIDS {
  viaf: string;
  wikidata: string;
  isni: string;

  constructor(viaf: string, wikidata: string, isni: string) {
    this.viaf = viaf;
    this.wikidata = wikidata;
    this.isni = isni;
  }
}
export class AuthorWorks {

  links: Links;
  size: number; // Size của trang
  entries: WorksEntry[];

  constructor(links: Links, size: number, entries: WorksEntry[]) {
    this.links = links;
    this.size = size;
    this.entries = entries;
  }
} // Data các tác phẩm
export class Links {

  self: string; // Link call API Trang hiện tại
  author: string; // Link call API Trang Author
  next: string; // Link call API Trang tiếp theo

  constructor(self: string, author: string, next: string) {
    this.self = self;
    this.author = author;
    this.next = next;
  }
}
export class WorksEntry {
  type: string;
  title: string;
  subjects: string[]; // Chuyên ngành của tác phẩm
  subjectpeople: string[];
  authors: Author[];
  key: string;
  latest_revision: number;
  revision: number;
  created: CreatedTime;
  last_modified: CreatedTime;


  constructor(type: string, title: string, subjects: string[], subjectpeople: string[], authors: Author[], key: string, latest_revision: number, revision: number, created: CreatedTime, last_modified: CreatedTime) {
    this.type = type;
    this.title = title;
    this.subjects = subjects;
    this.subjectpeople = subjectpeople;
    this.authors = authors;
    this.key = key;
    this.latest_revision = latest_revision;
    this.revision = revision;
    this.created = created;
    this.last_modified = last_modified;
  }
}
export class Author {
  private _type: {key: string; };
  private _author: {key: string; }; // Link tới author


  constructor(type: { key: string }, author: { key: string }) {
    this._type = type;
    this._author = author;
  }
}
