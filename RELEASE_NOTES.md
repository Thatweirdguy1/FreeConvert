## Drunk Peanuts 0.30.4

Dazzle slides are now clearly separated from the dark editing workspace. New presentations start with a warm-white page and readable dark text. Existing slide backgrounds are preserved, and added slides inherit the current slide palette.

The slide navigator now shows actual rendered thumbnails instead of placeholder cards. Visible previews load on demand, update after edits, and retain the presentation's aspect ratio. Rendering previews does not modify slide XML or mark the presentation as edited.

The editor adds a visible page edge and purple object-selection handles. The page edge is editor chrome and is not included in exported slides or PDFs. New text boxes use the slide's text color.

### Validation

95 Python regression tests, the frontend Node check and the real React/native suite check. Added coverage verifies blank-slide visibility, readable text colors, real thumbnails, preserved dark imports, and preview updates. The packaged suite check verifies thumbnail loading through QWebChannel on Windows and both macOS architectures.

### Downloads

- DrunkPeanuts-0.30.4-Setup.exe — Windows installer.
- DrunkPeanuts-Windows-x64.zip — portable folder.
- DrunkPeanuts-macOS-Apple-Silicon.zip and DrunkPeanuts-macOS-Intel.zip.
- SHA256SUMS.txt — checksums.

Windows binaries remain unsigned and macOS builds unnotarized.
