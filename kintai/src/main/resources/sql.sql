create database ascomdatabase;

use ascomdatabase;

-- test start
CREATE TABLE TEST_TABLE ( 
  name varchar(32) NOT NULL,  
  PRIMARY KEY (name)
);


INSERT INTO TEST_TABLE (NAME) VALUES ('박지성');
--test end


CREATE TABLE EMPLOYEE_TABLE ( 
  email varchar(255) NOT NULL,
  nickName varchar(32) NOT NULL,
  firstname varchar(32) NOT NULL,
  lastname varchar(32) NOT NULL,
  department varchar(32) NOT NULL,
  phone varchar(32) NOT NULL,
  status int(10) unsigned NOT NULL default '0',  
  PRIMARY KEY (email)
);

create table workapp_session_table(
	email varchar(255) NOT NULL,
	sessionkey varchar(50),
	sessionlimit timestamp, 
	constraint fk_id foreign key (email) references EMPLOYEE_TABLE (email) on delete cascade
);

CREATE TABLE workapp_info_table ( 
  email varchar(255) NOT NULL,
  workDate timestamp NOT NULL,
  startTime timestamp,
  endTime timestamp,
  restTime timestamp,
  workTime timestamp, 
  constraint fk_id1 foreign key (email) references EMPLOYEE_TABLE (email) on delete cascade
);

CREATE TABLE workapp_text_set_table (
  lang varchar(10) UNIQUE KEY NOT NULL,
  code varchar(10) NOT NULL,
  text varchar(100) UNIQUE KEY NOT NULL
);

CREATE TABLE WORKAPP_SUPER_ADMIN_SET_TABLE ( 
  setting varchar(20) UNIQUE KEY NOT NULL,
  setvalue varchar(20) NOT NULL
);

CREATE TABLE WORKAPP_APP_SET_TABLE ( 
  email varchar(255) NOT NULL,
  setting varchar(20) UNIQUE KEY NOT NULL,
  setvalue varchar(20) NOT NULL,
  constraint fk_id2 foreign key (email) references EMPLOYEE_TABLE (email) on delete cascade
);

show tables;

