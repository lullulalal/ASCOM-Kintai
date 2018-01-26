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

INSERT INTO EMPLOYEE_TABLE (email, nickname, firstname, lastname, department, phone)
VALUES ('wonny9010@gmail.com','eggsy','KOUNGWON','KIM','abc','0801234567')

INSERT INTO EMPLOYEE_TABLE (email, nickname, firstname, lastname, department, phone)
VALUES ('lullulalal@gmail.com','saw','MINSOO','SEO','abc','0805671234')

INSERT INTO EMPLOYEE_TABLE (email, nickname, firstname, lastname, department, phone)
VALUES ('park.siwon@a-s.com.co','kuri','SIWON','PARK','abc','0807777777')


create table workapp_session_table(
	email varchar(255) NOT NULL,
	sessionkey varchar(50),
	sessionlimit timestamp, 
	constraint fk_id foreign key (email) references EMPLOYEE_TABLE (email) on delete cascade
);

CREATE TABLE workapp_info_table ( 
  email varchar(255) NOT NULL,
  workDate date NOT NULL,
  startTime timestamp default '0000-00-00 00:00:00',
  endTime timestamp default '0000-00-00 00:00:00',
  restTime time default '0',
  workTime time default '0', 
  workState varchar(10) default '0',
  constraint fk_id1 foreign key (email) references EMPLOYEE_TABLE (email) on delete cascade
);

INSERT INTO workapp_info_table (email, workdate, starttime, endtime, resttime, worktime)
VALUES ('wonny9010@gmail.com','2018-01-20','2018-01-20 09:00:00','2018-01-20 18:00:00','01:00:00','08:00:00');

INSERT INTO workapp_info_table (email, workdate, starttime, endtime, resttime, worktime)
VALUES ('lullulalal@gmail.com','2018-01-21','2018-01-21 09:00:00','2018-01-21 16:00:00','01:00:00','06:00:00');

INSERT INTO workapp_info_table (email, workdate, starttime, endtime, resttime, worktime)
VALUES ('park.siwon@a-s.com.co','2018-01-22','2018-01-22 09:00:00','2018-01-22 23:00:00','01:00:00','13:00:00');

INSERT INTO workapp_info_table (email, workdate, yasumi)
VALUES ('wonny9010@gmail.com','2018-01-23','1');

UPDATE workapp_info_table SET endtime='2018-01-22 23:00:00', resttime='01:30:00' WHERE email='park.siwon@a-s.com.co';

		select
			count(*) 
		from 
			workapp_info_table 
		where 
			email='lullulalal@gmail.com'
		and 
			workdate=curdate()
		and 
			yasumi='1'

select * from workapp_info_table where email='wonny9010@gmail.com' and workdate=curdate();

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
	

update workapp_info_table w, select subtime(  (select subtime   (    (select time(endTime) from workapp_info_table where email='wonny9010@gmail.com' and workdate='2018-01-20')    ,(select time(startTime) from workapp_info_table where email='wonny9010@gmail.com' and workdate='2018-01-20')   )  ) ,(select time(restTime) from workapp_info_table where email='wonny9010@gmail.com' and workdate='2018-01-20') )) r
set w.restTime=r.subtime
where 
email='wonny9010@gmail.com'
and 
workdate='2018-01-20'
;
 
UPDATE workapp_info_table
SET workTime=(select * from (select subtime(  (select subtime   ( (select time(endTime) from workapp_info_table where email='wonny9010@gmail.com' and workdate='2018-01-20')    ,(select time(startTime) from workapp_info_table where email='wonny9010@gmail.com' and workdate='2018-01-20')   )  ) ,(select time(restTime) from workapp_info_table where email='wonny9010@gmail.com' and workdate='2018-01-20'))) as r)
WHERE email='wonny9010@gmail.com' and workdate='2018-01-20';


