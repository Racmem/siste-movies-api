--- Film rating
create table film_rating (
    id          serial primary key,
    name        varchar(255)             not null,
    code        varchar(255)             not null,
    "createdAt" timestamp with time zone not null,
    "updatedAt" timestamp with time zone not null
);

-- Genders
create table genders (
    id          serial  primary key,
    description varchar(255)             not null,
    "createdAt" timestamp with time zone not null,
    "updatedAt" timestamp with time zone not null
);

-- Movies
create table movies (
    id             serial primary key,
    name           varchar(255)             not null,
    release_date   timestamp with time zone not null,
    "createdAt"    timestamp with time zone not null,
    "updatedAt"    timestamp with time zone not null,
    film_rating_id integer references film_rating on update cascade on delete set null
);

-- Movie Genre
create table movie_genre (
    id          serial  primary key,
    "createdAt" timestamp with time zone not null,
    "updatedAt" timestamp with time zone not null,
    genre_id    integer references genders on update cascade on delete set null,
    movie_id    integer references movies on update cascade on delete set null
);

-- Inventory
create table inventory (
    id          serial  primary key,
    amount      integer                  not null,
    price       double precision         not null,
    "createdAt" timestamp with time zone not null,
    "updatedAt" timestamp with time zone not null,
    movie_id    integer references movies on update cascade on delete set null
);


------ INSERT DEFAULT VALUES ------------------
-- Default film rating
INSERT INTO film_rating
(id, name, code, "createdAt", "updatedAt")
VALUES
    (1, 'General Audiences', 'G', '2022-07-16 02:10:08', '2022-07-16 02:10:08'),
    (2, 'Parental Guidance Suggested', 'PG', '2022-07-16 02:10:08', '2022-07-16 02:10:08'),
    (3, 'Parental Strongly Cautioned', 'PG-13', '2022-07-16 02:10:08', '2022-07-16 02:10:08'),
    (4, 'Restricted', 'R', '2022-07-16 02:10:08', '2022-07-16 02:10:08'),
    (5, 'Adults Only', 'NC-17', '2022-07-16 02:10:08', '2022-07-16 02:10:08');

-- Default Genres
INSERT INTO genders
(id, description, "createdAt", "updatedAt")
VALUES
    (1, 'Acción', '2022-07-16 02:10:08', '2022-07-16 02:10:08'),
    (2, 'Aventuras', '2022-07-16 02:10:08', '2022-07-16 02:10:08'),
    (3, 'Ciencia Ficción', '2022-07-16 02:10:08', '2022-07-16 02:10:08'),
    (4, 'Comedia', '2022-07-16 02:10:08', '2022-07-16 02:10:08'),
    (5, 'Drama', '2022-07-16 02:10:08', '2022-07-16 02:10:08'),
    (6, 'Fantasía', '2022-07-16 02:10:08', '2022-07-16 02:10:08');
