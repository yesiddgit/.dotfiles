# ------------------------------------------------------------------------------
# Autoload
# ------------------------------------------------------------------------------

# Startx
if [[ ! $DISPLAY && $XDG_VTNR -eq 1 ]]; then
	exec startx
fi

# ------------------------------------------------------------------------------
# Variables
# ------------------------------------------------------------------------------

export ZSH="$HOME/.oh-my-zsh"
export LANG=en_US.UTF-8
export LC_ALL=en_US.UTF-8
export EDITOR='nvim'
export TERMINAL='kitty'
export BROWSER=chromium


# ------------------------------------------------------------------------------
# PATH
# ------------------------------------------------------------------------------

pathadd() {
  [ -d "$1" ] && [[ ":$PATH:" != *":$1:"* ]] && PATH="${PATH:+"$PATH:"}$1"
}

PATH=/usr/local/bin":$PATH"
pathadd /opt/local/bin
pathadd $HOME/bin
pathadd $HOME/.local/bin

# ------------------------------------------------------------------------------
# OH My ZSH
# ------------------------------------------------------------------------------

ZSH_THEME="af-magic"

# Plugins
plugins=(git gitfast zsh-completions)

# Load oh-my-zsh
source $ZSH/oh-my-zsh.sh

# ------------------------------------------------------------------------------
# Aliases
# ------------------------------------------------------------------------------

source "$HOME/.config/zsh/aliases"

# ------------------------------------------------------------------------------
# Autocompletion
# ------------------------------------------------------------------------------

autoload -Uz compinit
compinit
setopt COMPLETE_ALIASES
zstyle ':completion::complete:*' gain-privileges 1

# To customize prompt, run `p10k configure` or edit ~/.p10k.zsh.
[[ ! -f ~/.p10k.zsh ]] || source ~/.p10k.zsh
