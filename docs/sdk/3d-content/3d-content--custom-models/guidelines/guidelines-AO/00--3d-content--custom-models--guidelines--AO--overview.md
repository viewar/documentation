## Ambient Occlusion Maps

Ambient Occlusion Maps or Light Maps are very important for good looks in our app and in real-time applications in general, since real-time/dynamic shadows or real-time ambient occlusion generation has a huge impact in performance. Ambient occlusion also helps a lot to bring out the shape and details of objects and you can use high-poly versions of your object to generate a more detailed AO map as well. Without AO or lightmap  objects look very flat.

Things that are important for good quality ambient occlusion maps:

The most important one is an efficient and clean uv layout, with no overlapping uv shells and proper texture-space usage. To optimize and make the best use of your texture space, you should scale up shells that are easily visible and the ones that are hardly visible down. I've you have symmetrical objects or parts that are used multiple times, it can make sense to place those shells on top of each other \(as long as the lighting conditions are the same\) and you can upscale small shells to fill out empty texture-space.

On the rendering/baking side you should make sure that you bake with enough samples and as little as possible noise. It may look good in renderings, but uv-cuts will be a lot more visible that way. It is also a good idea to bake in a higher resolution than the one that you will use. You can always downscale the resolution.

Ambient occlusion has no real light information and are essentially just contact shadows on the object. They already improve the visual quality a lot, but creating a neutral light setup will improve the look even more. You have to keep in mind that in our app you can see objects from all directions, if you create for example one directional light from the front, it will look very much out of place when you place it in a room that has light coming from the other side. The best compromise is creating a light dome from the top and another from below that emits less light, so that the bottom parts are still lit, but darker.

Baking engines that use rays and not vertex normal directions generally give the better result, because uv-cuts are invisible or close to it. Many bakers like xnormal and the otherwise good bakers from Substance Designer produce very visible uv-cuts.

Another thing to note: If you have animated parts of the object, you probably have to explode the model before baking, because shadows that are out of place look a lot worse than shadows just not being there. Let's take a door with frame for example. If you bake it in closed position and then the animation opens the door, the contact area on the frame and door will be completely black and very visible. It's a compromise to bake them separately, but it is the better result.

#### Substance Designer:

Very good baker, that takes long in high settings and produces visible uv-cuts. Since SD is still in very active development, that might change in the future, there already have been improvements in that regard. Substance Designer is also very cheap compared to dedicated 3D software or render engines and a very powerful texturing tool.

#### **Marmoset Toolbag:**

Has a very good and fast ambient occlusion baker that produces close to no visible uvcuts. Make sure to use a high enough ray count for good result \(I generally go with 2048 rays for the final version, 64 samples and in 8k resolution. Resizing for in app usage is always done after baking\). It is also very fairly priced and the real-time rendering engine is also impressive.  
As of now the baker always uses the first uv set \(you might have to switch the uvsets for the baking process in your 3D software\) and even if you don't have a proper High Poly object you need to place a mesh \(duplicate in this case\) in the High Poly group. Make sure to delete all shadow maps or possible decals. You should adjust the cagefile to the mesh with the slider, if you are using the same mesh for the baking, set it to 0.001

[https://www.marmoset.co/posts/toolbag-baking-tutorial/](https://www.marmoset.co/posts/toolbag-baking-tutorial/)

#### **Vray:**

Vray produces - with the right settings - by far the best results. There are plugins for a lot of 3D software, but they are expensive. If you need it just for baking, you are better off with Marmoset Toolbag 3.

[http://www.laurenscorijn.com/articles/ambient-occlusion-baking](http://www.laurenscorijn.com/articles/ambient-occlusion-baking)

#### 3ds Max:

[http://www.laurenscorijn.com/articles/ambient-occlusion-baking](http://www.laurenscorijn.com/articles/ambient-occlusion-baking)

