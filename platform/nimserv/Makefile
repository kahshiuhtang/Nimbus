build:
	go build -o bin/nimserv cmd/main.go

run:
	bin/nimserv
	
testrun:	
	bin/nimserv -test

test: build testrun

all: build run