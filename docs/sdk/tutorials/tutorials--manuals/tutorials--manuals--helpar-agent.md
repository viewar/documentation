# helpar

### Manual - Support Agent

We’ll show you how to use a helpar app as a Support Agent.

#### What you'll need

* An **iOS ARKit compatible mobile device**.
<br>You may verify the compatibility here: [https://viewar.gitbooks.io/sdk-documentation/hardware.html\#supported-hardware](https://viewar.gitbooks.io/sdk-documentation/hardware.html#supported-hardware)\.
* Up-to-date version of the **ViewAR SDK App** (available from the App Store (iOS)).

#### What you'll learn to do:

* Answer a **remote assistance connection ** in Augmented Reality.
* **Save a session into the helpar database**.

#### Let's get started!

#####Setup:
Download the ViewAR SDK App from the App Store or Google Play Store.

#####Using the app:
Start the ViewAR SDK App. You can either use our sample demo (App ID: **helpar.demo**, version: **100**) or your own app [created with the App Builder](tutorials/helpar/helpar/create-your-app-with-the-app-builder.md) or [with the CLI](tutorials/helpar/helpar/helpar-cli.md).

Click on the _Padlock_ icon in the top-right corner. Login.

When a connection request appears on the screen, answer the call.

![](/assets/helpar - Tutorial - 1 - assistant.jpg)

When the call gets answered, the User's camera image will be streamed to your device. Feature Points detected by the User's application, touches and audio will also be transferred. _(Feature points are characteristic points in the camera image - clear changes of colour, object edges etc.. They are used to create a 3D representation of the object/scene used for the tracking to hold ion place.)_

Watch the User filming the object and start the conversation to get a better understanding of the problem.

![](/assets/helpar - Tutorial - 2 - assistant.jpg)

#####Annotations
When the feature points are in place both of you may start placing annotations on the object. The User's touches will be marked with red dots, while you will have a variety of different graphic elements to choose from.

Due to the nature of tracking, at the moment the annotations may only be placed on and in between the feature points. Try thinking about the feature points as a tool to determine the depth of your touch in the 3D space. We are constantly working on improving the system, therefore don't get frustrated if you cannot get something right the first time ;)

After providing User all the necessary information, you may end the call.

![helpar - User Manual - Screenshots - 3](/assets/helpar - Tutorial - 3.jpg)

#####Saving the record to the database
Getting remote assistance is useful, but what if we could make a good use of those already made calls?

That's exactly why we have introduced a **helpar database**.

After the connection with a User is terminated, you'll be automatically redirected to a Save Screen. If you find the advise you have just given possibly useful for other users, it is highly recommended to save it to the database. You'll be asked to define a name and keywords for your record. It will later be accessible through the _Search Database_ field in the Home Screen. After filming the object the annotations were recorded on, it will be possible to display the information without the live remote support of an assistant.

![](/assets/helpar - Tutorial - 4 - assistant.jpg)

#####More to come
We are still working on improvements for this template, adding new features every week. 

