from flask import Flask
from flask_cors import CORS
import helpers
app = Flask(__name__)
cors = CORS(app)

@app.route("/api/wappanalyzer/<target>")
def GetWappAnalyzer(target):
        return (helpers.get_wappanalyzer(target))

@app.route("/api/ping/<target>")
def GetPing(target):
        return(helpers.ping_website(target))

@app.route("/api/whois/<target>")
def GetWhoIs(target):
	return(helpers.get_who_is(target))

@app.route("/api/cookies/<target>")
def GetCookies(target):
	return(helpers.get_cookies("https://" + target))

@app.route("/api/certificate/<target>")
def GetCertificate(target):
        return(helpers.get_certificate(target))

@app.route("/api/nslookup/<target>")
def GetNsLookUp(target):
	return(helpers.get_ns_lookup(target))

@app.route("/api/scraper/<target>")
def GetScrapedWebsite(target):
	return(helpers.get_scraped_website(target))

if __name__ == '__main__':
	app.run(host='0.0.0.0')
