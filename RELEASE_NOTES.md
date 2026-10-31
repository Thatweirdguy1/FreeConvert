## Drunk Peanuts 0.30.2

Eight fresh Stitch designs inform the new Pages, Tables, Dazzle, Organize, Sketch, Formulaic, Writer and Play workspaces, built with React, Tailwind CSS and Lucide icons in the black, yellow and purple identity.

The desktop app connects the shared navigation, contextual toolbars, searchable Commands, Save actions and optional inspectors directly to the existing native canvases and file engines. Open With, templates and new-document launches use the same interface. File-format limits and unsaved-work safeguards remain in place.

Play includes React transport/seek controls, mute, volume up to 200%, editable local playlists with drag reordering, file/folder addition, playlist open/save, Picture in Picture and fullscreen. Its native VLC surface remains intact across viewing modes.

All assets, the original logo, icons and Qt web runtime are bundled locally. No server, remote fonts, account or network connection is needed. The converter retains its native queue and tools.

### Validation

- 94 Python regression tests and the frontend Node check pass locally.
- The actual React/native check covers Home and all eight workspaces, saved DOCX contents, formulas, screenplay/pen controls, responsive bounds, local navigation policy, PiP/fullscreen surface continuity and 200% volume.
- Release builds repeat source checks and verify packaged UI, OCR, native conversion, playlists and playback on Windows x64, macOS Intel and Apple Silicon. The packaged suite check plays a temporary local WAV through the new Play shell.

### Downloads

- DrunkPeanuts-0.30.2-Setup.exe — Windows installer.
- DrunkPeanuts-Windows-x64.zip — portable folder.
- DrunkPeanuts-macOS-Apple-Silicon.zip and DrunkPeanuts-macOS-Intel.zip.
- SHA256SUMS.txt — checksums.

Windows binaries remain unsigned and macOS builds unnotarized. See docs/STITCH_SUITE_030.md for scope and checks.
