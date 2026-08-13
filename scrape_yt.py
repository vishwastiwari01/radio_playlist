import urllib.request
import urllib.parse
import re
import time

missing_songs = [
    'Agar Tum Na Hote Kishore Kumar',
    'Khaike Paan Banaraswala Kishore Kumar',
    'Roop Tera Mastana Kishore Kumar',
    'Mere Mehboob Qayamat Hogi Kishore Kumar',
    'Sanam Mere Humraaz Kumar Sanu',
    'Mera Chand Mujhe Aaya Hai Nazar Kumar Sanu',
    'Woh Ladki Bahut Yaad Aati Hai Kumar Sanu',
    'Aisi Deewangi Alka Yagnik',
    'Ab Tere Bin Jee Lenge Hum Kumar Sanu',
    'Tere Dar Se Sanam Kumar Sanu',
    'Mujhe Neend Na Aaye Udit Narayan',
    'Aankhon Se Tune Kya Keh Diya Kumar Sanu',
    'Dheere Dheere Pyar Ko Badhana Hai Kumar Sanu',
    'Hoshwalon Ko Khabar Kya Jagjit Singh',
    'Hungama Hai Kyon Barpa Ghulam Ali',
    'Chithi Na Koi Sandesh Jagjit Singh'
]

results = []
for q in missing_songs:
    url = 'https://www.youtube.com/results?search_query=' + urllib.parse.quote(q)
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        html = urllib.request.urlopen(req).read().decode('utf-8')
        vids = re.findall(r'watch\?v=([a-zA-Z0-9_-]{11})', html)
        if vids:
            vid = vids[0]
            print(f'{{ title: "{q}", artist: "", ytVid: "{vid}", duration: 300, ytThumb: "https://img.youtube.com/vi/{vid}/mqdefault.jpg" }},')
        else:
            print(f'// Failed: {q}')
    except Exception as e:
        print(f'// Error {q}: {e}')
    time.sleep(0.5)
