"""Bound the GUI self-check and surface errors from windowed executables."""
from pathlib import Path
import subprocess
import sys
import tempfile

report = Path(tempfile.gettempdir()) / 'DrunkPeanuts-dashboard-check-error.txt'
if report.exists():
    report.unlink()
try:
    result = subprocess.run([sys.argv[1], '--dashboard-self-check'], timeout=90)
except subprocess.TimeoutExpired:
    print('Packaged dashboard check exceeded 90 seconds.')
    trace = Path(tempfile.gettempdir()) / 'DrunkPeanuts-workspace-check-trace.txt'
    if trace.exists():print(trace.read_text(encoding='utf-8'))
    raise SystemExit(1)
if result.returncode and report.exists():
    print(report.read_text(encoding='utf-8'))
raise SystemExit(result.returncode)
