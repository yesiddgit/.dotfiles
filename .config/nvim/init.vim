" =============================================================================
" Autoinstall vim-plug
" =============================================================================

if empty(glob('~/.config/nvim/autoload/plug.vim')) 
  silent !curl -fLo ~/.config/nvim/autoload/plug.vim --create-dirs
    \ https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim
  autocmd VimEnter * PlugInstall | source $MYVIMRC
endif

" =============================================================================
" Plugins
" =============================================================================

call plug#begin('~/.config/nvim/plugged')
	" syntax
  Plug 'sheerun/vim-polyglot'
	Plug 'yuezk/vim-js'

	" typing
	Plug 'jiangmiao/auto-pairs'
	Plug 'alvan/vim-closetag'
	Plug 'mattn/emmet-vim'

	" ide
	Plug 'scrooloose/nerdtree'
	Plug 'scrooloose/nerdcommenter'
	Plug 'vifm/vifm.vim'
	Plug 'christoomey/vim-tmux-navigator'
	Plug 'yggdroot/indentline'
	Plug 'ap/vim-css-color'

	" ui
	Plug 'gruvbox-community/gruvbox'
	Plug 'itchyny/lightline.vim'
	Plug 'shinchu/lightline-gruvbox.vim'
	Plug 'chriskempson/base16-vim'
	Plug 'mike-hearn/base16-vim-lightline'
	Plug 'arcticicestudio/nord-vim', { 'on': 'NERDTreeToggle' }

	" git
	Plug 'tpope/vim-fugitive'
	Plug 'airblade/vim-gitgutter'

call plug#end()

" =============================================================================
" Setup
" =============================================================================

set clipboard+=unnamedplus
set fileencoding=utf-8
set nobackup
set noswapfile
set nowritebackup
syntax on

" =============================================================================
" Options
" =============================================================================

set cursorline
set expandtab
set ignorecase
set nohlsearch
set number
set relativenumber
set shiftround
set shiftwidth=2
set showmatch
set smartcase
set smartindent
set softtabstop=2
set splitbelow
set splitright
set tabstop=2
set termguicolors
set textwidth=80
set title
set wrap

" =============================================================================
" UI Options
" =============================================================================

colorscheme nord

" airline
let g:lightline = { 
			\ 'colorscheme' : 'nord', 
			\ }

" =============================================================================
" Plugin Options
" =============================================================================

" closetag
let g:closetag_filenames = '*.html,*.xhtml,*.js,*.jsx,*.ts,*.tsx'

" NERDTree
autocmd StdinReadPre * let s:std_in=1
autocmd VimEnter * if argc() == 0 && !exists('s:std_in') | NERDTree | endif

let NERDTreeQuitOnOpen=1
let NERDTreeShowHidden=1
let NERDTreeAutoDeleteBuffer=1


" =============================================================================
" Shortcuts
" =============================================================================

let mapleader="\<Space>"

" Save. close and erase doc
nnoremap <leader>w :w<cr>
nnoremap <leader>q :q<cr>
nnoremap <leader>wq :wq<cr>
nnoremap <leader>e :1,$d<cr>

" Fast scrolling
nnoremap <C-e> 10<C-e>
nnoremap <C-y> 10<C-y>
nnoremap J 5j
nnoremap K 5k

" Move lines up or down
nnoremap <A-j> :m .+1<cr>
nnoremap <A-k> :m .-2<cr>
vnoremap <A-j> :m '>+1'<cr>
vnoremap <A-k> :m '<-2'<cr>

" NERDTree maps
nnoremap <leader>x :!node %<cr>
nnoremap <leader>t :NERDTreeToggle<cr>

" Emmet
let g:user_emmet_leader_key='<C-M>'
