function testScreenObject() {
        document.getElementById("demo").innerHTML =
            "Screen hight is: " + screen.height + ", Screen width is: " + screen.width +
            ", Screen avialable hight is: " + screen.availHeight + ", Screen available width is: " + screen.availWidth +
            ", Screen colordepth is: " + screen.colorDepth + ", Screen pixel depth is: " + screen.pixelDepth +
            ", URL is: " + window.location.href + ", Host domain is: " + window.location.hostname +
            ", Path name is: " + window.location.pathname + ", Protool is: " + window.location.protocol;
}