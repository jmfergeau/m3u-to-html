# M3U to HTML

This javascript function turns a m3u playlsit file into an html list. It simply parses the file, keeping only the file's name without the extension, without the absolute path and without the useless things you can find in a m3u. Check [this example](https://maxlefou.gitlab.io/m3u-to-html/) to see it in action.

For better results, use a m3u8 file. m3u will work but this format doesn't support files with weird characters and can be not in UTF-8.
