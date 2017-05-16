import json
import os

from selenium.webdriver.remote.webdriver import WebDriver as Remote


def get_mandatory_env(env: str) -> str:
    try:
        return os.environ[env]
    except KeyError:
        print("Please specify the environment variable: '" + env + "'")
        exit(2)


def read_browsers():
    browsersFilePath = os.path.dirname(__file__) + '/../res/browsers.json'
    with open(browsersFilePath, 'r') as browsersFile:
        return json.load(browsersFile)


def save_browsers(browsers):
    with open('../res/browsers.json', 'w') as browsersFile:
        json.dump(browsers, browsersFile, indent=4)


if __name__ == '__main__':
    SAUCE_USERNAME = get_mandatory_env('SAUCE_USERNAME')
    SAUCE_ACCESS_KEY = get_mandatory_env('SAUCE_ACCESS_KEY')
    COMMAND_EXECUTOR = "http://" + SAUCE_USERNAME + ":" + SAUCE_ACCESS_KEY + "@ondemand.saucelabs.com:80/wd/hub"

    browsers = read_browsers()

    for browser in browsers:
        driver = Remote(command_executor=COMMAND_EXECUTOR, desired_capabilities=browser['configuration'])
        driver.get("http://www.reliply.org/tools/requestheaders.php")

        headerRows = driver.find_elements_by_css_selector('tr')
        headerRows = iter(headerRows)
        next(headerRows)
        next(headerRows)

        headers = browser['headers']
        headers.clear()

        for headerRow in headerRows:
            cells = headerRow.find_elements_by_tag_name('td')
            headerName = cells[0].text
            headerValue = cells[1].text
            if headerName is "Host":
                continue
            headers[headerName] = headerValue

        driver.quit()

    save_browsers(browsers)
