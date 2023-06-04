import {Html5Qrcode, Html5QrcodeResult} from "html5-qrcode";

export function onScanSuccess(decodedText: string , decodedResult: Html5QrcodeResult) {
    // handle the scanned code as you like, for example:
    console.log(`Code matched = ${decodedText}`, decodedResult);
}

export function onScanFailure(error : string) {
    // handle scan failure, usually better to ignore and keep scanning.
    // for example:
    console.warn(`Code scan error = ${error}`);
}

export function setupScanner(
    readerId: string,
) {
    let html5QrcodeScanner = new Html5Qrcode(
        readerId, /* verbose */ false
    );
    html5QrcodeScanner.start(
        {
            facingMode: "environment",
        },
        {
            fps: 10,
            qrbox: {
                width: 250,
                height: 250
            },
        },
        onScanSuccess,
        onScanFailure,
    );
}
