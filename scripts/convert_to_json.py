#!/usr/bin/env python3
"""
Script to help convert publications from HTML to JSON format.
Usage: python3 convert_to_json.py > new_publication.json

This script will read from standard input to gather publication details 
and output a JSON object that can be added to data/publications.js.
"""

import json
import sys

def get_input(prompt, default=None):
    """Get input from user with a prompt."""
    if default:
        value = input(f"{prompt} [{default}]: ")
        return value if value else default
    else:
        return input(f"{prompt}: ")

def get_multi_input(prompt, stop_word="done"):
    """Get multiple inputs until a stop word is entered."""
    print(f"{prompt} (type '{stop_word}' when finished):")
    items = []
    while True:
        item = input("> ")
        if item.lower() == stop_word.lower():
            break
        items.append(item)
    return items

def get_multiline_input(prompt):
    """Get multi-line input until an empty line is entered."""
    print(f"{prompt} (press Enter twice when finished):")
    lines = []
    while True:
        line = input()
        if not line and lines:  # Empty line and we have content
            break
        if line:  # Non-empty line
            lines.append(line)
    return "\n".join(lines)

def main():
    """Main function to collect publication data and output JSON."""
    print("Enter publication details (press Enter for defaults where applicable):")
    
    # Collect basic information
    id_value = get_input("Publication ID (e.g. lastname2023title)")
    title = get_input("Title")
    venue = get_input("Venue (e.g. CVPR)")
    year = get_input("Year")
    url = get_input("URL (e.g. arxiv link)")
    image = get_input("Image path", f"pictures/{id_value}.png")
    abstract = get_input("Abstract")
    
    # Collect BibTeX
    bibtex = get_multiline_input("\nEnter BibTeX content")
    
    # Collect authors
    print("\nEnter authors:")
    authors = []
    while True:
        author_name = get_input("Author name (leave empty when done)")
        if not author_name:
            break
        
        author_url = get_input("Author URL (leave empty if none)")
        is_pi = get_input("Is this author the PI? (y/n)", "n").lower() == "y"
        
        author_entry = {
            "name": author_name,
            "url": author_url if author_url else "",
            "isPI": is_pi
        }
        authors.append(author_entry)
    
    # Collect tags
    tags = get_multi_input("\nEnter tags (e.g. Robustness, Evaluation)")
    
    # Collect additional links
    links = []
    print("\nEnter additional links:")
    while True:
        link_text = get_input("Link text (leave empty when done)")
        if not link_text:
            break
        
        link_url = get_input("Link URL")
        links.append({
            "text": link_text,
            "url": link_url
        })
    
    # Create the publication object
    publication = {
        "id": id_value,
        "title": title,
        "authors": authors,
        "venue": venue,
        "year": year,
        "url": url,
        "bibtex": bibtex,
        "image": image,
        "links": links,
        "abstract": abstract,
        "tags": tags
    }
    
    # Output the JSON
    print("\nJSON output:")
    # Format the bibtex field with backticks
    bibtex_json = json.dumps(publication["bibtex"])
    publication_json = json.dumps(publication, indent=2)
    # Replace the normal JSON-escaped bibtex with a backtick version
    publication_json = publication_json.replace(f'"bibtex": {bibtex_json}', f'"bibtex": `{publication["bibtex"]}`')
    print(publication_json)

if __name__ == "__main__":
    main() 