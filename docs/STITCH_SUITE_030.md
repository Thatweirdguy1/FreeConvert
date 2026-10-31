# Drunk Peanuts. workspace redesign

Project: https://stitch.withgoogle.com/projects/8925735609446928643

Eight new desktop designs were generated, then fetched with `get_screen` and their HTML downloaded through Stitch. The implementation follows their compact navigation, document hierarchy, contextual tools, violet selections and restrained yellow actions rather than importing generated HTML or remote assets.

| Workspace | Stitch screen ID | Layout used |
| --- | --- | --- |
| 1 Pages - Document Editor | `bb8c6380da234eb99912c20299fef2c8` | Shared rail, contextual toolbar, dominant canvas, optional secondary controls |
| 2 Tables - Spreadsheet Editor | `10393a6066c541b5a51e684c7f46d45c` | Shared rail, contextual toolbar, dominant canvas, optional secondary controls |
| 3 Dazzle - Presentation Editor | `d73a38fe9044416bbff1f5c82db5f701` | Shared rail, contextual toolbar, dominant canvas, optional secondary controls |
| 4 Organize - Database Editor | `8897893234f345d6807c4cc69a151178` | Shared rail, contextual toolbar, dominant canvas, optional secondary controls |
| 5 Sketch - Drawing Editor | `83e07c83f1aa46fba711ac2b18df5d53` | Shared rail, contextual toolbar, dominant canvas, optional secondary controls |
| 6 Formulaic - Formula Editor | `47ecf73e15eb419381bdc058a40537b3` | Shared rail, contextual toolbar, dominant canvas, optional secondary controls |
| 7 Writer - Screenplay Editor | `d7d40c794063443d888b3518a525a2bd` | Shared rail, contextual toolbar, dominant canvas, optional secondary controls |
| 8 Play - Media Player | `a4f3fb5c3b894048be2c80e4a53dda59` | Shared rail, contextual toolbar, dominant canvas, optional secondary controls |

## Implementation

`dashboard/src/Workspace.jsx` composes the shared Sidebar, WorkspaceToolbar, CommandButton, PlayerControls and Playlist components. Tailwind utilities and the common CSS tokens provide the same visual language as Home. The original DP icon and wordmark are bundled. No CDN, remote font or server is required.

`desktop_workspaces.py` wraps each original top-level editor with a local React view and a native canvas host. QWebChannel exposes only existing actions and validated context-specific controls. DOCX/XLSX/PPTX/SQLite/Fountain engines, native inspectors, file dialogs and save/close safeguards remain responsible for file handling. Commands searches the complete native action catalog, including templates and export options. Editor windows remain separate so documents and playback retain their original lifecycle.

Pages keeps its light rich-text paper. Tables mirrors the actual current-cell formula. Dazzle keeps its interactive slide scene and object inspector; speaker notes open the existing editor. Organize uses the existing SQLite table/grid engine. Sketch supports the existing raster pen and eraser. Formulaic retains its supported formula parser and preview. Writer retains Fountain editing, formatted preview and local recovery. Play retains its VLC surface while React controls the real local queue, seek, volume, playlists, PiP and fullscreen.

Generated suggestions for unsupported Sketch tools/SVG export, spreadsheet sheet editing, cloud features, and LaTeX engines were deliberately omitted. The browser-only view is explicitly marked as sample design preview and never claims to edit local files.

## Interaction and verification

Hover, focus and selection transitions use 180 ms; navigation uses 200 ms. Reduced-motion disables transitions. Controls have accessible names, visible focus and native keyboard shortcuts. At smaller windows the global rail collapses, toolbars scroll, and secondary navigation/inspectors can be hidden. PiP and fullscreen remove secondary chrome; transport remains in a consistent bottom row without hiding focused controls.

`python app.py --dashboard-self-check` exercises Home plus all eight actual Qt/React workspace bridges with temporary documents and isolated Writer recovery/settings. It checks responsive bounds, local navigation policy, native action dispatch, saved DOCX contents, spreadsheet formulas, Writer formatting, Sketch controls, and Play surface/window continuity through PiP/fullscreen with volume at 200%. The release workflow repeats the check inside each packaged executable on Windows and both macOS architectures. Existing source regression, OCR, native conversion, playlist and playback checks also remain enabled.

The packaged check reopens the saved DOCX. This caught a macOS filesystem issue in python-docx's `parts/../templates` resource paths: the `parts` directory must physically exist even when Python modules are in an archive. The release build uses `--collect-all docx` to include its module directories and XML templates. Unexpected native warning dialogs now fail the self-check with their error text instead of waiting indefinitely for a click.
