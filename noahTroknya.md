*Level 0

bandit0

ssh -p 2220 bandit0@bandit.labs.overthewire.org

how to ssh onto a specific port of a system

*Level 1

boJ9jbbUNNfktd78OOpsqOltutMc3MY1

cat readme

how to read the contents of a file

*Level 2

CV1DtqXWVFXTvM2F0k09SHz0YwRINYA9

cat ./-

how to read files using relative file paths

*Level 3

UmHadQclWmgdLOKQ3YNgjWxGoRMb5luK

cat "spaces in this filename"

how to read files with spaces in the filename

*Level 4

pIwrPrtPN36QITSp3EQaw936yaFoFgAB

```
ls
cd inhere
cat ./.hidden
```

how to read/find hidden files

*Level 5

koReBOKuIDDepwhWk7jZC0RTdopnAYKh

```
find . -type f ! -executable -exec file {} + | grep -w text
cat ./-file07
```

figured out how to find human-readable only files

*Level 6

DXjZPULLxYr17uwoI01bNLQbtFemEgo7

```
find . -type f -size 1033c ! -executable -exec file {} + | grep -w text
cat ./inhere/maybehere07/.file2
```

used more specifiers with previous command

*Level 7
HKBPTKQnIay4Fw76bEy8PVxKEDQRKTzs

```
find / -type f -size 33c -user bandit7 -group bandit6
cat /var/lib/dpkg/info/bandit7.password
```

how to use find with users, groups and of more than just current directory

*Level 8

cvX2JJa4CFALtqS87jk27qwqGhBM9plV

grep -i millionth data.txt

how to use the grep command to find something in a file

*Level 9

UsvVyFSfZZWbi6wgC7dAFyFuR6jQQUhR

cat data.txt | sort | uniq -u


how to use sort and uniq functions

*Level 10

truKLdjsbJ5g7yyJ2X2R0o3a5HQJFuLk

cat data.txt | grep -aE '\= +'

how to grep binary data in a .txt file

*Level 11

IFukwKGsFW8MOq3IRFqrxE1hxTNEbUPR

base64 -d data.txt

how to decode base64

*Level 12

5Te8Y4drgCRfCx8ugdwuEX8KFC6k2EUu

cat data.txt | tr [a-zA-Z] [n-za-mN-ZA-M]

how to undo caesar ciphers using tr command

*Level 13

8ZjyCRiBWFYkneahHwxCv3wb2a1ORpYL

Repeatedly uncompressed file until running 'file' command on it said it was ASCII text, then ran a cat 
command on it

How to decompress files of various types(gzip, tar, and bzip2).

*Level 14

4wcYUJFw0k0XLShlDzztnTBHiqxU3b3e

```
ssh bandit14@localhost -i sshkey.private
cat /etc/bandit_pass/bandit14
```

ssh using public/private key authentication

*Level 15

BfMYroe26WYalil77FoDi9qh59eK5xNr

nc localhost 30000, then input the previous password to recieve the next one

Figured out how connecting to ports and receiving information from them

*Level 16

cluFn7wTiGryunymYOu4RcffSxQluehd

openssl s_client -connect localhost:30001, and then input previous password to get the next one

How to use openssl command

*Level 17

Did not need to get a password, instead got an ssh key.  It would be insecure to paste it into this 
file.

nmap localhost -p31000-32000

openssl s_client -connect localhost:31790, input password for bandit16, got an RSA key

copied and pasted into a file on my local machine, then ran chmod 400 on the file to ensure correct 

permissions, then ssh-ed into bandit17

How to create a key file with proper permissions