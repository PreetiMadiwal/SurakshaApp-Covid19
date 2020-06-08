/****** Object:  Table [dbo].[User]    Script Date: 04-06-2020 17:39:27 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[User](
	[Id] [uniqueidentifier] NOT NULL,
	[FirstName] [nvarchar](50) NOT NULL,
	[LastName] [nvarchar](50) NOT NULL,
	[ValidIdProofNumber] [nvarchar](50) NOT NULL,
	[DoB] [datetime] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
----------------------------

CREATE TABLE [dbo].[Location](
	[Id] [uniqueidentifier] NOT NULL,
	[Name] [nvarchar](250) NOT NULL,
	[Coordinates] [nvarchar](max) NOT NULL,
	[IsSafeZone] [bit] NULL,
	[CreatedDate] [datetime] NOT NULL,
	[ModifiedDate] [datetime] NULL,
	[LocationMappingId] [uniqueidentifier] NOT NULL,
 CONSTRAINT [PK__Location__3214EC07697DB60D] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
------------------------------

CREATE TABLE [dbo].[UserTravelHistory](
	[Id] [uniqueidentifier] NOT NULL,
	[UserId] [uniqueidentifier] NOT NULL,
	[LocationId] [uniqueidentifier] NOT NULL,
	[VisitedDate] [datetime] NOT NULL,
	[IsSafeZone] [bit] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO

ALTER TABLE [dbo].[UserTravelHistory]  WITH CHECK ADD  CONSTRAINT [FK_UserTravelHistory_Location] FOREIGN KEY([LocationId])
REFERENCES [dbo].[Location] ([Id])
GO

ALTER TABLE [dbo].[UserTravelHistory] CHECK CONSTRAINT [FK_UserTravelHistory_Location]
GO

ALTER TABLE [dbo].[UserTravelHistory]  WITH CHECK ADD  CONSTRAINT [FK_UserTravelHistory_User] FOREIGN KEY([UserId])
REFERENCES [dbo].[User] ([Id])
GO

ALTER TABLE [dbo].[UserTravelHistory] CHECK CONSTRAINT [FK_UserTravelHistory_User]
GO
------------------------------


CREATE TABLE [dbo].[UserStatus](
	[UserId] [uniqueidentifier] NOT NULL,
	[IsSafe] [bit] NULL,
	[LastModifiedDate] [datetime] NULL,
	[CreatedDate] [datetime] NOT NULL
) ON [PRIMARY]

GO

ALTER TABLE [dbo].[UserStatus]  WITH CHECK ADD  CONSTRAINT [FK_UserStatus_User] FOREIGN KEY([UserId])
REFERENCES [dbo].[User] ([Id])
GO

ALTER TABLE [dbo].[UserStatus] CHECK CONSTRAINT [FK_UserStatus_User]
GO

----------------------------data
declare @userid uniqueidentifier, @locationid uniqueidentifier

select @userid= newid() , @locationid = newid()
insert into Location select @locationid,'Jayanagar','200,300',null,getdate(),null,'B195D802-742F-4386-984B-7EAE71E75085'
insert into [User] select @userid, 'User1','User1','12345','1990-06-08'
insert into [dbo].[UserTravelHistory] select newid(), @userid, @locationid,getdate(), 1
insert into UserStatus select @userid, 1, getdate(), getdate()

select @userid= newid() , @locationid = newid()
insert into Location select @locationid,'IndiraNagar','300,400',null,getdate(),null,'B195D802-742F-4386-984B-7EAE71E75085'
insert into [User] select @userid, 'User2','User2','4367563','1996-09-25'
insert into [dbo].[UserTravelHistory] select newid(), @userid, @locationid,getdate(), 1
insert into UserStatus select @userid, 1, getdate(), getdate()


select @userid= newid() , @locationid = newid()
insert into Location select @locationid,'Majestic','100,400',0,getdate(),getdate(),'B195D802-742F-4386-984B-7EAE71E75085'
insert into [User] select @userid, 'User3','User3','764353','1970-03-01'
insert into [dbo].[UserTravelHistory] select newid(), @userid, @locationid,getdate(), 0
insert into UserStatus select @userid, 0, getdate(), getdate()

select @userid= newid() , @locationid = newid()
insert into Location select @locationid,'WhiteField','500,500',1,getdate(),getdate(),'B195D802-742F-4386-984B-7EAE71E75085'
insert into [User] select @userid, 'User4','User4','864353','1972-01-01'
insert into [dbo].[UserTravelHistory] select newid(), @userid, @locationid,getdate(), 1
insert into UserStatus select @userid, 1, getdate(), getdate()

--select * from [User] order by FirstName
--select * from Location -- location IsSafeZone = null is true
--select * from [UserTravelHistory]
--select * from UserStatus

