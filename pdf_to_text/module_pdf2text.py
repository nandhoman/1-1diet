import pdftotext
import requests

url = "http://phisapi.nhhost.online:4001/setRecipes"


def main():
    with open("s2-ovenschotelauberginebloemkool-022020.pdf", "rb") as f:
        pdf = pdftotext.PDF(f)
    text = "\n\n".join(pdf)
    bevat = text.split("Dit recept bevat")[1].split("Ingrediënten")[0]
    try:
        bevat = prettify(bevat.split("persoon")[1])
    except IndexError:
        bevat = prettify(bevat.split("personen")[1])
    if "1 persoon" in text:
        aantal_personen = "1"
    else:
        aantal_personen = prettify(text.split(" personen")[0].split("bevat")[1])
    bereiding = prettify(text.split("Bereiding")[1].split("\n\x0c")[0])
    ingredienten = prettify(text.split("Ingrediënten")[1]).split("Bereiding")[0]
    stap = text.split("STAP ")[1].split("\n")[0]
    output = {
        "Preparation": bereiding,
        "Ingredients": ingredienten,
        "Text": bevat,
        "Step": int(stap),
        "Persons": int(aantal_personen),
    }
    json = {
        'PDFPath': 'C:/asdfjkasldfjkl;',
        'CommunityID': 'CID123456789994',
        'Populairity': '000000000000000000000000000000',
        'Preparation': bereiding,
        'BannerImageID': 'BID123456789011',
        'Text': bevat,
        'ReadTime': '00:05:00',
        'AverageRanking': '000000000000000000000000000000',
        'Likes': '000000000000000000000000000000',
        'Title': 'Lekker Bloemkool soep met weinig calorieen',
        'Step': int(stap),
        'Persons': int(aantal_personen),
        'Ingredients': ingredienten
    }
    headers = {}

response = requests.request("POST", url, headers=headers, data = json)

    print(response.text.encode('utf8'))
    for x in output.items():
        print(x)


def prettify(text):
    return " ".join(text.strip().replace("\n", " ").replace(r"\n", " ").split())


if __name__ == "__main__":
    main()
