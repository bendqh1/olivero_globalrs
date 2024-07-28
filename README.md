# globalrs

`globalrs` means "Global resources".

Basic starter sub-theme of a Drupal general core theme.

In Drupal 10 the general core theme is Olivero but this project should probably help to sub-theme any future general core theme.

## YAML files and all other files

In `/themes/globalrs` add the files available in this directory and edit accordingly.

* YAML files can't contain tabulations, only whitespaces.
* Flush all caches before testing.
* Don't forget to **both** install the sub theme and set it as default.

Regions are not inherited by sub themes, you have to copy the regions from the parent to your theme's `globalrs.info.yml` file, or else the default system themes are used.<br>
To do that, go to `/core/themes/THEME/THEME.info.yml` and copy the following into `/themes/globalrs/globalrs.info.yml`.

```
regions:
  header: Header
  ...
```

* Note that you need to indent region-values with two whitespaces

## Deleted files

* I have deleted the `blocks.css` file because blocks should rely on the core theme's CSS or have in-place CSS with a structure-developing tool like Elementor. In rare cases a block's CSS could be put i `style.css`.
