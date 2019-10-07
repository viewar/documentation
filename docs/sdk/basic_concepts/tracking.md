---
id: tracking
title: Tracking
---

Tracking Systems try to estimate the world pose \(position and orientation\) of a mobile device \(e.g. phone, tablet, head mounted display\) in real-time. They may be inside-out (done entirely on the device) or outside-in (where external sensors are used).

### Marker-base Tracking

Marker-based tracking uses fixed marker images, which are recognized by the tracking systems in order to calculate the pose of a device. Markers can be QR-Codes, Magazines, Photos or any kind of 2D images. Markers have to be known by the tracking system before they can be recognized. Inaccuracies occur as soon as the marker is not visible in the camera frame, because pose information can not be updated. Therefore, extended tracking uses additional methods to estimate the pose of a marker even if it is not visible in the camera.

### Marker-less Tracking

Marker-less tracking uses camera input for detecting unique retrievable patterns \(i.e. feature points\) in the surrounding environment, for estimating the camera's pose.

In both cases, image processing algorithms are used for calculating 3D environmental information with use of motion. These software-based approaches are less accurate than dedicated 3D sensors, so hardware-based solutions are used for more accuracy.

### 3D Model Regognition

Object Recognition is a computer vision technique for identifying 2D/3D objects. With 3D object recognition and tracking, a real-world object can be recognized and its pose - estimated. Similarly to markers, 3D target objects must be known by the System beforehand.

#### Tracking Systems integrated by ViewAR

| Tracker              | Target device         | SLAM                 | Point cloud | Mesh generation | Marker tracking                | 3D Model Tracking        | Scene Recognition | Additional hardware needed | Requires license |
| :------------------- | :-------------------- | :------------------- | :---------- | :-------------- | :----------------------------- | :----------------------- | :---------------- | :------------------------- | :--------------- |
| **ARKit**            | iOS                   | Yes                  | Yes         | \(in progress\) | Yes \(ViewAR adds QR-Markers\) | No                       | Yes               | No                         | No               |
| **ARCore**           | Android               | Yes                  | Yes         | No              | No                             | No                       | Yes               | No                         | No               |
| **Wikitude**         | iOS, Android          | Yes                  | No          | No              | YES \(but not used\)           | No                       | Yes               | No                         | No               |
| **Kudan**            | iOS, Android          | Yes \(but not used\) | No          | No              | Yes                            | No                       | No                | No                         | No               |
| **Vuforia**          | iOS, Android, Windows | Yes \(but not used\) | No          | No              | Yes                            | Yes                      | No                | No                         | Yes              |
| **Structure.io**     | iOS                   | Yes                  | No          | Yes             | No                             | No                       | No                | Yes                        | No               |
| **Structure Bridge** | iOS                   | Yes                  | No          | Yes             | No                             | No                       | Yes               | Yes                        | No               |
| **HoloLens**         | Windows               | Yes                  | Yes         | \(in progress\) | \(third party solution\)       | \(third party solution\) | Yes               | Included                   | No               |
| **VisionLib**        | iOS, Android          | No                   | No          | No              | No                             | Yes                      | No                | No                         | Yes              |
| **Placenote**        | iOS                   | Yes                  | Yes         | No              | No                             | Pointcloud               | Yes               | No                         | No               |
| **6D.ai**            | iOS                   | Yes                  | Yes         | Yes             | No                             | No                       | Yes               | No                         | Yes              |

#### Read next

[API Quickstart - Tracking](sdk/quickstart/tracking) - ViewAR API Tracking guide
[ViewAR API References](http://test2.3.viewar.com/docs/index.html) - Complete list of the ViewAR API References
