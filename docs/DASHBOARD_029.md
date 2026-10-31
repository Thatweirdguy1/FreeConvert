# React Home — 0.29.4

The startup Home screen uses React, Tailwind CSS and Lucide icons, taking the Stitch dashboard's navigation / launch cards / tool grid / recent-file structure as inspiration. Black, yellow and purple, the original wordmark, labeled navigation, keyboard focus, reduced motion, local file dialogs, search and category filters are shared across the launcher.

The launcher connects to existing native tools rather than duplicating them. Convert opens the native queue; Pages, Tables, Dazzle, Sketch, Organize and Formulaic open their existing editors; Writer opens the screenplay editor; Play opens its existing local player with playlists, PiP and volume up to 200%. Home in the menu (Ctrl+Shift+H) returns from conversion without clearing the queue.

The UI and icons are built into `assets/dashboard`; Qt WebEngine renders them locally without a server. Qt WebChannel exposes an allowlisted set of workspace actions and native file dialogs. Recent-file opening accepts only previously selected paths. Network requests, unbundled local resources, popups and outside page navigation are blocked. Recent entries can be cleared without deleting source files. Empty installed sessions contain no fabricated files; browser-only previews label sample entries explicitly.

New source dependencies: Node 24 for building the React UI, and Qt WebEngine / WebChannel for rendering and bridging it. These runtimes and assets are bundled in release downloads. Installed users do not need Node or Python. Existing editor windows, conversion settings and Explorer launchers retain their native behavior.

## Checks

- 94 existing Python tests passed.
- The Node check covers tool search, category filtering and filename routing.
- `python app.py --dashboard-self-check` checks actual local React rendering, a DOM click through WebChannel into Pages, a temporary-image conversion queue, return to Home, recent-file clearing, outside-navigation rejection, logo loading and responsive bounds. It isolates recent-file settings in a temporary INI file.
- Release CI builds the React assets and runs the packaged dashboard check on Windows and both macOS targets alongside the existing OCR, native conversion, playlist and playback checks.

Only the Home screen has been converted to React. Editors and the player continue using their existing native Qt interfaces. File format limitations remain as documented in the main README.

Windows defaults the embedded Home renderer to software compositing to prevent a black dashboard on affected graphics drivers. This flag applies to Qt WebEngine, not the separate libVLC player. The installed Windows UI is checked with the Computer plugin in addition to the packaged self-check.

## Published and installed verification

[The 0.29.4 release build](https://github.com/Thatweirdguy1/Drunk-Peanuts/actions/runs/41211744545) passed on Windows x64, Intel macOS and Apple Silicon, including source and packaged React/native bridge, OCR, native conversion, playlist and playback checks. [Release downloads](https://github.com/Thatweirdguy1/Drunk-Peanuts/releases/tag/v0.29.4) include installers, portable archives and SHA256SUMS.txt.

The Windows installer matched both its GitHub asset digest and SHA256SUMS.txt: `da8c32b9fe5a52cc9b2ba08674beed0630a0e4897e7c03f9304967345c1f8fa6`. Installed executable metadata reports 0.29.4. Its dashboard self-check and native Office conversion checks passed after installation.

Computer verified a normal installed launch without external graphics overrides, correct Home rendering after maximizing, and opening native Pages. Earlier visual checks also exercised native Convert and Ctrl+Shift+H return to Home. README images are fresh captures of the installed 0.29.4 Home and Pages windows. The Windows renderer defaults to software compositing because a hardware-rendered Home appeared black on this machine; Play remains on its separate VLC renderer.
