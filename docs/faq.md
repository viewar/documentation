---
id: faq
title: FAQs
---

## General Topics

- **What skills do I need to have to work with the AppBuilder?**  
  No skills at all. That’s the whole reason of AppBuilder! :\)

* **What skills do I need to have to work with the ViewAR SDK?**  
  Typical Web Development skills: HTML, CSS, JavaScript, working with a version control system e.g. Git, basic 3D models handling and/ or editing. More information on how to use the AppBuilder may be found _here_.

- **Can one application be edited by multiple users?**  
  No, an application has just one owner and in order to edit, one must be logged in as the owner user. However, there is no limit as far as the number of application users is concerned.More about setting users for an application.

- **Can I upload my own 3D data to be used in an application?**  
  Yes, you may do it through in the Content Tab in the App Builder.

* **Do I need to purchase a license?**  
  Any application may be tested through the ViewAR App, available both for iOS and Android. However, if you want to publish it, enable for commercial use or extend its functionality by editing the source code, then a license would be necessary.

## User Account

- **How do I change my password?**  
  If you remember you password but **want to change it**, log in to our [Developer Portal](https://portal.viewar.com/),  
  navigate to the [Account](https://portal.viewar.com/account) section and simply type in the new password.  

## Application

- **How to use ViewAR application?**  
  The ViewAR App is a mothership for all our applications - it comes with the basic structure of your app e.g. the code necessary for communication with our Core, managing tracking systems. All it needs are functionalities and UI which you have prepared prepare in the AppBuilder or with the use of our SDK. In order to run a custom app through our App, provide the App-ID and version to be used. After start, type in those informations and you're ready to go!

* **Where can I find the ViewAR application?**  
  ViewAR App is available both in App Store and Google Play Store. The same App-ID may be used with both versions, however, depending on the chosen technical solutions, limited functionalities may be available.

- **Can I publish my Application to Google Play Store or Apple App Store?**  
  Yes, however, in order to do so, purchasing a license would be necessary. There are different types of licenses available, so you can certainly find one that fits your needs. 

## 3D Models

- **How do I add a model to the application?**  
  In order to add a model to the application, you must upload it through the _Model Manager._

- **My model is not visible in the application. Why?**  
  For your model to be visible in the application, 5the following conditions must be met:
  - Model must be in the Content Tab of the target application.
  - Model must be set to _Active._
  - The category must be set to _Active._

- **Is it possible to scale my model when using the App?**
It depends on the model "Scalable" setting. It is accessible through the Model Editor.
If the toggle is ON - in AR the model will be inserted in the default scale, however, it will be possible to change its scale. Respectively, if the setting is OFF - the model's scale will be fixed.

* **How do I disable a model in an application, but still keep it on the account?**  
  In the Developer Portal, open your project (application) and navigatie to the Content tab.

- **May one model be accessed by multiple applications?**  
  Yes. A model is not assigned to particular App-ID. Instead, it is recognised by the application by its ID and/or foreign key and therefore may be easily reused.

- **How do I set alternative material options for my model?**  
  Access the model list through the _Model Manager_ and click on the _Edit_ icon of the target model. Now, you may drag a drop multiple material options to one geometry name.

* **What 3D file formats are supported using model upload?**  
  The ViewAR System supports mesh format that transfer UV layouts. You may use .fbx and .obj files.

- **In the _Material Editor_ my model is displayed as white. What do I do?**  
  If your model is displayed as white, it means that there are not material options assign. It is nothing wrong! Just choose some of existing materials or create your own and assign them to particular surfaces of your model.

- **In the _Material Editor_ my model is displayed as white. What do I do?**  
  How to upload a 3D model with textures?
ViewAR System supports .mtl files.

