import cv2


def qr_from_image():
    data = cv2.QRCodeDetector()
    val, _, _ = data.detectAndDecode(cv2.imread("QR_Code.png"))
    if val:
        print("QR code detected: ", val)
    else:
        print("No QR code found in the image")


def qr_from_camera():
    cap = cv2.VideoCapture()
    while True:
        ret, frame = cap.read()
        if not ret:
            break
        data = cv2.QRCodeDetector()
        val, _, _ = data.detectAndDecode(frame)
        if val:
            print("QR code detected: ", val)
        cv2.imshow("QR code scanner", frame)
        if cv2.waitKey(1) == ord('q'):
            break
    cap.release()
    cv2.destroyAllWindows()


choice = input("Enter 1 to scan QR code from image or 2 to scan using camera: ")
if choice == '1':
    qr_from_image()
elif choice == '2':
    qr_from_camera()
else:
    print("Invalid choice")
