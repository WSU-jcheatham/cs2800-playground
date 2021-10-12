#Vulnerability Taxonomy CWE Homework
##Noah Troknya

One of the CWE vulnerabilities that I run into frequently is Incorrect Default Permissions.  
This is also known as CWE-276.  What this CWE vulnerability is is quite simple.  As the name 
implies, the default permissions on your file are incorrect.  I mostly run into this issue 
when I have needed to make new key files for ssh and when trying to use files from my native 
Windows system in the Linux command line.


Some examples of when this vulnerability could appear are when you: have a program create a 
file, but not change the permissions that it has; create a new key file and don't 
secure it (usually when you try to use the key the system  will yell at you to fix the 
permissions); and a lot more.  Ways to prevent this vulnerability include: securing all files 
to only those users/groups who need access to them; making sure that all files regarding 
sensitive information, such as `etc\shadow`, use strict ile permissions, like `chmod 600` for 
ssh/gpg key files; another solution might be to write some form of script that actively 
changes the file permissions on specific types of files, such as `.pem`, to however secure 
they need to be.


Most of the time this CWE vulnerability is easily caught and remedied through the above 
solutions.  It isn't that complicated of an issue to fix, just a tedious one, especially in 
Windows.  It took me about half an hour just to find where to access the file permissions, 
let alone figure out how to change the permissions themselves.  If left unfixed, this could 
lead to many other vulnerabilities, such as the ability for anyone to see what files are in a 
directory and their contents.  While this may not sound bad for a shared system that requires 
sharing a lot of information, it could spell disaster if someone weaseled their way into one 
of these "sharing is caring" type of groups and gained access to sensitive, potentially 
cofidential, files, like someone's medical history for example.  While having correct file permissions may seem like a nonissue, it very much could be an issue if left unresolved.