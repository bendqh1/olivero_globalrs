# globalrs

`globalrs` means "Global resources".

Basic starter sub-theme of a Drupal general core theme.

## YAML files and all other files

In `/themes/globalrs` add the files available in this directory and edit accordingly.

* **Both** install the sub theme and set it as default.

## Create a sub theme

Regions are not inherited by sub themes, you have to copy the regions from the parent to your theme's `globalrs.info.yml` file, or else the default system themes are used.<br>
To do that, go to `/core/themes/THEME/THEME.info.yml` and copy the following into `/themes/globalrs/globalrs.info.yml`.

```
regions:
  header: Header
  ...
```

Then, copy any relevant file from `/core/themes/THEME/templates/layout` to a corresponding directory root at `/themes/THEME/templates/layout`.

## Notes

* Flush all caches after changes to yaml-twig files.
* YAML files can't contain tabulations, only whitespaces; we need to indent region-values with two whitespaces.
