create table customer(
	id serial not null primary key,
	username text unique not null,
    count integer DEFAULT 0 not null
);

create table sold_items (
	id serial not null primary key,
    name text not null,
	price decimal(10,2),
	foreign key (cust_id) references customer(id)
);