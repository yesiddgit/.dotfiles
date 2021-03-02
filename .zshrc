# Enable Powerlevel10k instant prompt. Should stay close to the top of ~/.zshrc.
# Initialization code that may require console input (password prompts, [y/n]
# confirmations, etc.) must go above this block; everything else may go below.
if [[ -r "${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-${(%):-%n}.zsh" ]]; then
  source "${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-${(%):-%n}.zsh"
fi

# Autoload
# -------------------------------------

# Startx
if [[ ! $DISPLAY && $XDG_VTNR -eq 1 ]]; then
	exec startx
fi

# Variables
# -------------------------------------

export ZSH="$HOME/.oh-my-zsh"
export LANG=en_US.UTF-8
export LC_ALL=en_US.UTF-8
export EDITOR='nvim'
export TERMINAL='kitty'
export BROWSER=chromium

export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm

# PATH
# -------------------------------------

pathadd() {
  [ -d "$1" ] && [[ ":$PATH:" != *":$1:"* ]] && PATH="${PATH:+"$PATH:"}$1"
}

PATH=/usr/local/bin":$PATH"
pathadd /opt/local/bin
pathadd $HOME/bin
pathadd $HOME/.local/bin
pathadd $HOME/.config/zsh/

# Prompt
# -------------------------------------

ZSH_THEME="powerlevel10k/powerlevel10k"

# Plugins
plugins=(git gitfast zsh-completions)

# Load oh-my-zsh
source $ZSH/oh-my-zsh.sh

# Aliases
# -------------------------------------
# LS
alias ls='ls --color=auto --group-directories-first'
alias ll='ls -l'
alias la='ls -lavh'

# Sudoedit files
alias svim='sudoedit'

# Config files
alias :zsh='vim ~/.zshrc'
alias :kitty='vim ~/.config/kitty/kitty.conf'
alias :alacritty='vim ~/.config/alacritty/alacritty.yml'
alias :nvim='vim ~/.config/nvim/init.vim'
alias :vim='vim ~/.vimrc'

# Git
alias gc='git commit -m'
alias dot='/usr/bin/git --git-dir=$HOME/.dotfiles/ --work-tree=$HOME'
alias dota='dot add '
alias dotc='dot commit -m '
alias dotp='dot push'
alias dots='dot status '

# Utilities
alias vf='vifmrun'
alias vifm='vifmrun'
alias fonts='fc-cache -f -v'
alias reset='cd ~; clear; source ~/.zshrc'
alias fetch='clear && neofetch'
alias mine='chmod -R a-x,o-w,+X '
alias modx='chmod +x '

# Autocompletion
# -------------------------------------

autoload -Uz compinit
compinit
setopt COMPLETE_ALIASES
zstyle ':completion::complete:*' gain-privileges 1

# To customize prompt, run `p10k configure` or edit ~/.p10k.zsh.
[[ ! -f ~/.p10k.zsh ]] || source ~/.p10k.zsh
