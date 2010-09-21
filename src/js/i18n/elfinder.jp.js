/*
 * Hungarian translation
 * @author Tomoaki Yoshida <info@yoshida-studio.jp>
 * @version 2010-09-22
 */
(function($) {
if (elFinder && elFinder.prototype.options && elFinder.prototype.options.i18n) 
	elFinder.prototype.options.i18n.jp = {
		/* errors */
		'Root directory does not exists'        : 'ルートディレクトリが存在しません',
		'Unable to connect to backend'          : 'バックエンドと接続できません',
		'Access denied'                         : 'アクセスが拒否されました',
		'Invalid backend configuration'         : 'バックエンドの設定が正しくありません',
		'Unknown command'                       : '未知のコマンドです',
		'Command not allowed'                   : '許可されていないコマンドです',
		'Invalid parameters'                    : 'パラメータが正しくありません',
		'File not found'                        : 'ファイルが見つかりません',
		'Invalid name'                          : '名前が正しくありません',
		'File or folder with the same name already exists' : '同じ名前のファイルまたはフォルダが存在しています',
		'Unable to rename file'                 : 'ファイル名を変更できません',
		'Unable to create folder'               : 'フォルダが作成できません',
		'Unable to create file'                 : 'ファイルが作成できません',  
		'No file to upload'                     : 'アップロードするファイルがありません',
		'Select at least one file to upload'    : '少なくとも1つのファイルをアップロードしてください',
		'File exceeds the maximum allowed filesize' : 'ファイルサイズが最大許容量を超えています',
		'Data exceeds the maximum allowed size' : 'データが最大許容サイズを超えています',
		'Not allowed file type'                 : '許可されていないファイルタイプです',
		'Unable to upload file'                 : 'ファイルがアップロードできません',
		'Unable to upload files'                : 'ファイルがアップロードできません',
		'Unable to remove file'                 : 'ファイルが削除できません',
		'Unable to save uploaded file'          : 'アップロードされているファイルを保存できません',
		'Some files was not uploaded'           : 'いくつかのファイルがアップロードされていません',
		'Unable to copy into itself'            : '同じフォルダ内にコピーできません',
		'Unable to move files'                  : 'ファイルを移動できません',
		'Unable to copy files'                  : 'ファイルをコピーできません',
		'Unable to create file copy'            : 'ファイルのコピーが作成できません',
		'File is not an image'                  : '画像ファイルではありません',
		'Unable to resize image'                : '画像をリサイズできません',
		'Unable to write to file'               : 'ファイルに書き込むことができません',
		'Unable to create archive'              : 'アーカイブを作成することができません',
		'Unable to extract files from archive'  : 'アーカイブを解凍できません',
		'Unable to open broken link'            : 'リンクが壊れています',
		'File URL disabled by connector config' : 'connector configでファイルURLが無効にされています',
		/* statusbar */
		'items'          : 'アイテム',
		'selected items' : 'アイテム選択',
		/* commands/buttons */
		'Back'                    : '戻る',
		'Reload'                  : 'リロード',
		'Open'                    : '開く',
		'Preview with Quick Look' : 'クイックルックで見る',
		'Select file'             : 'ファイル選択',
		'New folder'              : '新しいフォルダ',
		'New text file'           : '新しいテキストファイル',
		'Upload files'            : 'ファイルアップロード',
		'Copy'                    : 'コピー',
		'Cut'                     : 'カット',
		'Paste'                   : 'ペースト',
		'Duplicate'               : '複製',
		'Remove'                  : '削除',
		'Rename'                  : '名前変更',
		'Edit text file'          : 'テキストファイル編集',
		'View as icons'           : 'アイコン表示',
		'View as list'            : 'リスト表示',
		'Resize image'            : 'イメージリサイズ',
		'Create archive'          : '圧縮',
		'Uncompress archive'      : '解凍',
		'Get info'                : 'プロパティ',
		'Help'                    : 'ヘルプ',
		'Dock/undock filemanger window' : 'ファイルマネージャを出す/しまう',
		/* upload/get info dialogs */
		'Maximum allowed files size' : '最大許容ファイルサイズ',
		'Add field'   : 'フィールドを加える',
		'File info'   : 'ファイル情報',
		'Folder info' : 'フォルダ情報',
		'Name'        : '名前',
		'Kind'        : '種類',
		'Size'        : 'サイズ',
		'Modified'    : '修正日時',
		'Permissions' : 'パーミッション',
		'Link to'     : 'リンク先',
		'Dimensions'  : '画像サイズ',
		'Confirmation required' : '確認',
		'Are you shure you want to remove files?<br /> This cannot be undone!' : 'ファイルを削除します。よろしいですか？<br />この操作は取り消しできません！',
		/* permissions */
		'read'        : '読み取り',
		'write'       : '書き込み',
		'remove'      : '削除',
		/* dates */
		'Jan'         : '1月',
		'Feb'         : '2月',
		'Mar'         : '3月',
		'Apr'         : '4月',
		'May'         : '5月',
		'Jun'         : '6月',
		'Jul'         : '7月',
		'Aug'         : '8月',
		'Sep'         : '9月',
		'Oct'         : '10月',
		'Nov'         : '11月',
		'Dec'         : '12月',
		'Today'       : '今日',
		'Yesterday'   : '昨日',
		/* mimetypes */
		'Unknown'                           : '不明',
		'Folder'                            : 'フォルダ',
		'Alias'                             : 'エイリアス',
		'Broken alias'                      : '壊れたエイリアス',
		'Plain text'                        : 'プレーンテキスト',
		'Postscript document'               : 'Postscript ドキュメント',
		'Application'                       : 'アプリケーション',
		'Microsoft Office document'         : 'Microsoft Office ドキュメント',
		'Microsoft Word document'           : 'Microsoft Word ドキュメント',  
		'Microsoft Excel document'          : 'Microsoft Excel ドキュメント',
		'Microsoft Powerpoint presentation' : 'Microsoft Powerpoint ドキュメント',
		'Open Office document'              : 'Open Officeドキュメント',
		'Flash application'                 : 'Flash アプリケーション',
		'XML document'                      : 'XML ドキュメント',
		'Bittorrent file'                   : 'Bittorrent ファイル',
		'7z archive'                        : '7z 形式',
		'TAR archive'                       : 'TAR 形式',
		'GZIP archive'                      : 'GZIP 形式',
		'BZIP archive'                      : 'BZIP 形式',
		'ZIP archive'                       : 'ZIP 形式',
		'RAR archive'                       : 'RAR 形式',
		'Javascript application'            : 'Javascript アプリケーション',
		'PHP source'                        : 'PHP ソース',
		'HTML document'                     : 'HTML ドキュメント',
		'Javascript source'                 : 'Javascript ソース',
		'CSS style sheet'                   : 'CSS',
		'C source'                          : 'C ソース',
		'C++ source'                        : 'C++ ソース',
		'Unix shell script'                 : 'Unix shell スクリプト',
		'Python source'                     : 'Python ソース',
		'Java source'                       : 'Java ソース',
		'Ruby source'                       : 'Ruby ソース',
		'Perl script'                       : 'Perl スクリプト',
		'BMP image'                         : 'BMP イメージ',
		'JPEG image'                        : 'JPEG イメージ',
		'GIF Image'                         : 'GIF イメージ',
		'PNG Image'                         : 'PNG イメージ',
		'TIFF image'                        : 'TIFF イメージ',
		'TGA image'                         : 'TGA イメージ',
		'Adobe Photoshop image'             : 'Adobe Photoshop イメージ',
		'MPEG audio'                        : 'MPEG オーディオ',
		'MIDI audio'                        : 'MIDI オーディオ',
		'Ogg Vorbis audio'                  : 'Ogg Vorbis オーディオ',
		'MP4 audio'                         : 'MP4 オーディオ',
		'WAV audio'                         : 'WAV オーディオ',
		'DV video'                          : 'DV ビデオ',
		'MP4 video'                         : 'MP4 ビデオ',
		'MPEG video'                        : 'MPEG ビデオ',
		'AVI video'                         : 'AVI ビデオ',
		'Quicktime video'                   : 'Quicktime ビデオ',
		'WM video'                          : 'WM ビデオ',
		'Flash video'                       : 'Flash ビデオ',
		'Matroska video'                    : 'Matroska ビデオ',
		// 'Shortcuts' : 'ショートカット',		
		'Select all files' : '全てのファイルを選択',
		'Copy/Cut/Paste files' : 'ファイルのコピー/カット/ペースト',
		'Open selected file/folder' : '選択されたファイル/フォルダを開く',
		'Open/close QuickLook window' : 'クイックルックウィンドウを開く/閉じる',
		'Remove selected files' : '選択されたファイルを削除',
		'Selected files or current directory info' : '選択されたファイルまたは現在のディレクトリの情報',
		'Create new directory' : '新しいディレクトリを作成',
		'Open upload files form' : 'ファイルアップロードウィンドウを開く',
		'Select previous file' : '前のファイルを選択',
		'Select next file' : '次のファイルを選択',
		'Return into previous folder' : '前のフォルダへ戻る',
		'Increase/decrease files selection' : 'ファイルの選択を増やす/減らす',
		'Authors'                       : 'Authors',
		'Sponsors'  : 'Sponsors',
		'elFinder: Web file manager'    : 'elFinder: Web file manager',
		'Version'                       : 'Version',
		'Copyright: Studio 42 LTD'      : 'Copyright: Studio 42 LTD',
		'Donate to support project development' : 'Donate to support project development',
		'Javascripts/PHP programming: Dmitry (dio) Levashov, dio@std42.ru' : 'Javascripts/PHP programming: Dmitry (dio) Levashov, dio@std42.ru',
		'Python programming, techsupport: Troex Nevelin, troex@fury.scancode.ru' : 'Python programming, techsupport: Troex Nevelin, troex@fury.scancode.ru',
		'Design: Valentin Razumnih'     : 'Design: Valentin Razumnih',
		'Spanish localization'          : 'Spanish localization',
		'Icons' : 'Icons',
		'License: BSD License'          : 'License: BSD License',
		'elFinder documentation'        : 'elFinder documentation',
		'Simple and usefull Content Management System' : 'Simple and usefull Content Management System',
		'Support project development and we will place here info about you' : 'プロジェクトをサポートしてあなたの情報をここに刻みましょう。',
		'Contacts us if you need help integrating elFinder in you products' : 'あなたの商品にelFinderを組み込む際に助力が必要な際は私たちにご連絡ください',
		'elFinder support following shortcuts' : 'elFinderでは次のショートカットが利用できます',
		'helpText' : 'elFinderはあなたのコンピュータのファイルマネージャ的な動作をします。<br />上部パネルのアイコンでファイル/フォルダの操作をします。アイコンにマウスカーソルを合わせるとヒントが表示されます。<br />elFinder内のファイルやフォルダを操作するには右クリックで表示されるメニューを使用します。<br />複数のファイルやフォルダをコピーまたは削除するには、Shift/Alt(Command)を押しながら左クリックをします。'	
		};
	
})(jQuery);
