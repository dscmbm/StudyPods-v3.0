<!-- PROJECT SHIELDS -->

[![MIT License][license-shield]][license-url]
[![Discord][discord-shield]][discord-url]

<h1 align="center">QR Code Scanner and Reader</h1>



<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
  </ol>
</details>

## About The Project

This project is a QR code scanner and reader that can read QR codes from images and live camera feeds.

### Built With

Python, OpenCV

## Getting Started
1. Clone the project repository from GitHub.
2. Install OpenCV library using pip.
3. Run the code in a Python environment.
### Prerequisites
1. Python 3.10 installed
2. OpenCV library installed
### Installation
1. Clone the project repository from GitHub using the command: git clone "Link of this rep."
2. Install OpenCV library using the command: pip install opencv-python

### Usage

1. To scan a QR code from an image, run the code and enter '1' when prompted to choose an option. The code will then scan the QR code from the provided image file and display the decoded message if a QR code is found in the image.
2. To scan a QR code from a live camera feed, run the code and enter '2' when prompted to choose an option. The code will then open the camera feed and continuously scan for QR codes. If a QR code is found, the decoded message will be displayed on the console and the camera feed will be shown in a separate window. To stop scanning, press 'q'.

<!-- MARKDOWN LINKS & IMAGES -->

[license-shield]: https://img.shields.io/github/license/dscmbm/StudyPods-v3.0?style=for-the-badge
[license-url]: https://github.com/dscmbm/StudyPods-v3.0/blob/main/LICENSE
[discord-shield]: https://img.shields.io/discord/864499877723504640?style=for-the-badge
[discord-url]: https://discord.gg/CGmhQpSSZD
