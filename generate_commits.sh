#!/bin/bash

# Configuration
REPO_URL="https://github.com/Elamathi27/portfolio-.git"
START_DATE="2026-05-01"
END_DATE="2026-07-31"
HISTORY_FILE="history_log.txt"

# Commit messages list
commit_messages=(
  "fix: correct navigation scroll spy offset"
  "docs: update readme with deployment instructions"
  "style: adjust grid glow background opacity on dark mode"
  "refactor: consolidate dashboard counters into central data file"
  "feat: add currently learning widget to skills page"
  "docs: add inline comments for pdf preview loading fallback"
  "style: update scrollbar thumb color on hover"
  "fix: cast typescript union type for SQL Projects category"
  "feat: add Google App Store data project metadata"
  "docs: detail experience bullet points for Sadhvi Academy"
  "refactor: isolate theme providers in providers component"
  "style: modify line height on hero section title"
  "fix: handle duplicate app entries inside SQL data script"
  "style: implement glassmorphic properties on KPI boxes"
  "feat: implement mailto contact form submission"
  "docs: outline open questions in implementation plan"
  "refactor: optimize metadata tags for SEO indexing"
  "style: define responsive margins for grid layout cards"
  "fix: check validation of email structure in contact form"
  "feat: embed github contributions graph SVG element"
  "refactor: restructure projects list elements into smaller cards"
  "docs: update license file and developer configurations"
  "style: refine active section highlights in mobile nav menu"
  "fix: adjust layout shift in hero metrics counters"
)

echo "=========================================================="
echo " Starting backdated git commits generator "
echo "=========================================================="

# Initialize git if not already
if [ ! -d ".git" ]; then
  git init
  echo "[+] Initialized empty Git repository."
fi

# Ensure history file exists
touch $HISTORY_FILE

# Set remote origin
git remote remove origin 2>/dev/null
git remote add origin $REPO_URL
echo "[+] Configured git origin to: $REPO_URL"

# Main loop: Step through days
current_date=$START_DATE

if [[ "$OSTYPE" == "msys" || "$OSTYPE" == "win32" ]]; then
  end_sec=$(date -d "$END_DATE" +%s)
else
  end_sec=$(date -d "$END_DATE" +%s 2>/dev/null || date -j -f "%Y-%m-%d" "$END_DATE" "+%s")
fi

while true; do
  if [[ "$OSTYPE" == "msys" || "$OSTYPE" == "win32" ]]; then
    curr_sec=$(date -d "$current_date" +%s)
  else
    curr_sec=$(date -d "$current_date" +%s 2>/dev/null || date -j -f "%Y-%m-%d" "$current_date" "+%s")
  fi
  
  if [ $curr_sec -gt $end_sec ]; then
    break
  fi

  rand_val=$((RANDOM % 100))
  commit_count=0
  
  if [ $rand_val -lt 65 ]; then
    commit_count=0
  elif [ $rand_val -lt 85 ]; then
    commit_count=1
  elif [ $rand_val -lt 95 ]; then
    commit_count=2
  else
    commit_count=$((3 + RANDOM % 2))
  fi
  
  if [ $commit_count -gt 0 ]; then
    echo "Processing $current_date: Generating $commit_count commits..."
    for ((i=1; i<=commit_count; i++)); do
      msg_idx=$((RANDOM % ${#commit_messages[@]}))
      msg=${commit_messages[$msg_idx]}
      
      hour=$((9 + RANDOM % 13))
      min=$((RANDOM % 60))
      sec=$((RANDOM % 60))
      
      timestamp="${current_date}T$(printf "%02d:%02d:%02d" $hour $min $sec)"
      
      echo "$timestamp - $msg" >> $HISTORY_FILE
      git add $HISTORY_FILE
      GIT_AUTHOR_DATE="$timestamp" GIT_COMMITTER_DATE="$timestamp" git commit -m "$msg"
    done
  fi
  
  if [[ "$OSTYPE" == "msys" || "$OSTYPE" == "win32" ]]; then
    current_date=$(date -d "$current_date + 1 day" +%Y-%m-%d)
  else
    current_date=$(date -d "$current_date + 1 day" +%Y-%m-%d 2>/dev/null || date -j -v+1d -f "%Y-%m-%d" "$current_date" +%Y-%m-%d)
  fi
done

echo "[✓] Completed backdated commits."
