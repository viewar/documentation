## Custom Model Info

In the ViewAR System 3D models come with additional information such as _ID, foreign key, name, description, dimensions_. They may be accessed and edited either for each model separately \(by clicking the _Edit_ icon in the _Model List_\) or uploaded as an Excel Sheet containing multiple models information. 
 
#### Download

An Excel Sheet containing information about models in a specific account may be downloaded using the following link: [https://develper.viewar.com/custom/universal/action:download](https://develper.viewar.com/custom/universal/action:download).

An portion of an example table:

| viewar\_id | foreign\_key | name | description | active | deleted |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 1 | johnny-bravo | Johnny Bravo | A muscular and boorish young man who tries to get women to date him, though he is usually unsuccessful. | 1 | 1 |
| 2 | apollo-13 | Apollo 13 | Apollo 13 was the seventh manned mission in the Apollo space program and the third intended to land on the Moon. | 0 | 0 |
| 3 | psyduck | Psyduck | Psyduck is constantly stunned by its headache and is unable to think very clearly. | 0 | 0 |
| 4 | flux-capacitor | Flux capacitor | It consists of a rectangular-shaped compartment with three flashing Geissler-style tubes arranged in a "Y". | 0 | 1 |
| 5 | hamster | Hamster | Pure delight. | 1 | 0 |

**viewar\_id: **Unique ViewAR Identifier - make sure that you **do not change any information** in this column!

**foreign\_key: **Additional piece of identification information assigned to every model. You may use these to import a particular element in the scene \(in comparison: using the model's ID would require a change very time a new model would be uploaded to the system. This way, you application may also be moved between accounts as long as the foreign key naming remains consistent\).

**name: **Self-explanatory :\) Could be accessed from the app code.

**description: **Like above, could be accessed from the app code.

**active: **A model may be temporarily de-activated and, this way, skipped by the application \(eliminates the need of code changes\).

**deleted: **Specifies whether the model has been removed from an account.** **If you keep your backup tables, it is also a hidden way to bring the model back from the dead ;\)

Tip: Keep in mind that for this functionality to work, you must be logged in! Also, make sure that you keep a backup copy of the sheet, so that you can restore your data if you make a mistake.

### Advanced information upload/download

There is a way to manage information about model in a specific account through an Excel Sheet.

To download the file, log into your account and go to the following URL: [https://developer.viewar.com/custom/universal/action:download](https://developer.viewar.com/custom/universal/action:download).

You may now edit the file locally and upload it, when you're done. There is no need to keep all rows in your table - you may update only the ones which require a change. The models are recognised by the *_Model ID_*, therefore pay special attention *not to change it*!

To upload an updated file, log into your account and go to the following URL: [https://developer.viewar.com/custom/universal/action:upload](https://developer.viewar.com/custom/universal/action:upload).

