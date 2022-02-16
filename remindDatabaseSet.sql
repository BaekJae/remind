create database remind;

use remind;

create table users(
 userId varchar(25) not null primary key,
 userPassword varchar(256) not null,
 userName varchar(10),
 userMail varchar(30),
 userNickName varchar(10),
 userIsExpert bool default 0,
 userDiaryId int
);
 
 create table board(
 boardId int primary key auto_increment,
 boardName varchar(6) not null
);
 
 create table notes(
 noteId int primary key auto_increment,
 boardId int not null,
 noteWriter varchar(25) not null,
 noteWritedDate Date not null,
 noteWritedTime Time not null,
 noteContent varchar(1000) not null,
 noteImage varchar(256) not null,
 noteViews int default 0,
 notePrefer int default 0,
 noteIsExpert bool default 0
);
 
create table reply(
 replyId int primary key auto_increment,
 replyWriter varchar(25) not null,
 replyContent varchar(500) not null,
 replyPrefer int default 0,
 replyWritedDate Date not null,
 replyWritedTime Time not null
);

create table diary(
 diaryId int primary key auto_increment,
 userId varchar(25) not null
);

create table diaryNotes(
 diaryNoteId int primary key auto_increment,
 diaryId int not null,
 diaryNoteDate Date not null,
 diaryNoteStampType int,
 diaryNoteContent varchar(1000) not null,
 diaryNoteImage varchar(256)
);

create table diaryN(
    diaryId int primary key auto_increment,
    diaryDate Date not null,
    diaryTitle varchar(500) not null,
    diaryContent varchar(1000) not null
);

create table stamps(
 stampId int primary key,
 stampFeelId int not null
);

create table feelings(
 feelingId int primary key,
 stampId int not null,
 feelingMusic varchar(1000) not null
);