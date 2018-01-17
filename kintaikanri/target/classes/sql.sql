create database ascomdatabase;

use ascomdatabase;

CREATE TABLE EMPLOYEE_TABLE ( 
  email varchar(255) NOT NULL,
  nickName varchar(32) NOT NULL,
  name varchar(32) NOT NULL,
  department varchar(32) NOT NULL,
  phone varchar(32) NOT NULL,
  status int(10) unsigned NOT NULL default '0',  
  PRIMARY KEY (email)
);

create table employee_app_auth_table(
	email varchar(255) NOT NULL not null,
	authority int(10) unsigned NOT NULL default '2',
	constraint fk_id foreign key (email) references EMPLOYEE_TABLE (email) on delete cascade
);

CREATE TABLE work_info_table ( 
  email varchar(255) NOT NULL,
  work_date timestamp NOT NULL,
  start_time timestamp,
  end_time timestamp,
  rest_time timestamp,
  work_time timestamp,
  work_state int(10) unsigned NOT NULL, 
  constraint fk_id1 foreign key (email) references EMPLOYEE_TABLE (email) on delete cascade
);

CREATE TABLE text_set_table ( 
  code varchar(4) UNIQUE KEY NOT NULL,
  text varchar(100) NOT NULL
);

CREATE TABLE admin_set_table ( 
  setting varchar(20) UNIQUE KEY NOT NULL,
  value varchar(20) NOT NULL
);

show tables;

