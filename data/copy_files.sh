#!/bin/bash

# create the file "abc.bib"
touch abc.bib

# loop through all txt files in the directory
for file in *.txt
do
    # copy the content of each file and append it to "abc.txt"
    # separate each entry with a newline
    echo "$file"
    echo "" >> abc.bib
    cat "$file" >> abc.bib
done

