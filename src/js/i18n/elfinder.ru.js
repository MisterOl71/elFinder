/**
 * Russian translation
 * @author Dmitry Levashov <dio@std42.ru>
 * @version 2010-09-22
 */
(function($) {
if (elFinder && elFinder.prototype.options && elFinder.prototype.options.i18n) 
	elFinder.prototype.options.i18n.ru = {
		/* errors */
		'Root directory does not exists'       : 'Корневая директория не существует',
		'Unable to connect to backend'         : 'Не удалось соединиться с сервером',
		'Access denied'                        : 'Доступ запрещен',
		'Invalid backend configuration'        : 'Некорректный ответ сервера',
		'Unknown command'                      : 'Неизвестная команда',
		'Command not allowed'                  : 'Выполнение команды запрещено',
		'Invalid parameters'                   : 'Некорректные параметры',
		'File not found'                       : 'Файл не наден',
		'Invalid name'                         : 'Некорректное имя',
		'File or folder with the same name already exists' : 'Файл или папка с таким именем уже существует',
		'Unable to rename file'                : 'Не удалось переименовать файл',
		'Unable to create folder'              : 'Не удалось создать папку',
		'Unable to create file'                : 'Не удалось создать файл',  
		'No file to upload'                    : 'Нет файлов для загрузки',
		'Select at least one file to upload'   : 'Выберите, как минимум, один файл для загрузки',
		'File exceeds the maximum allowed filesize' : 'Размер файла превышает максимально разрешенный размер',
		'Data exceeds the maximum allowed size' : 'Данные превысили максимально разрешенный размер',
		'Not allowed file type'                 : 'Неразрешенный тип файла',
		'Unable to upload file'                 : 'Не удалось загрузить файл',
		'Unable to upload files'                : 'Не удалось загрузить файлы',
		'Unable to remove file'                 : 'Не удалось удалить файл',
		'Unable to save uploaded file'          : 'Не удалось сохранить загруженый файл',
		'Some files was not uploaded'           : 'Некоторые файлы не удалось загрузить',
		'Unable to copy into itself'            : 'Невозможно скопировать в себя',
		'Unable to move files'                  : 'Не удалось переместить файлы',
		'Unable to copy files'                  : 'Не удалось скопировать файлы',
		'Unable to create file copy'            : 'Не удалось создать копию файла',
		'File is not an image'                  : 'Файл не является изображением',
		'Unable to resize image'                : 'Не удалось изменить размеры изображения',
		'Unable to write to file'               : 'Не удалось записать файл',
		'Unable to create archive'              : 'Не удалось создать архив',
		'Unable to extract files from archive'  : 'Не удалось извлечь файлы из архива',
		'Unable to open broken link'            : 'Невозможно открыть битую ссылку',
		'File URL disabled by connector config' : 'Доступ к адресам файлов запрещен настройками коннектора',
		/* statusbar */
		'items'          : 'объектов',
		'selected items' : 'выбрано объектов',
		/* commands/buttons */
		'Back'                    : 'Назад',
		'Reload'                  : 'Обновить',
		'Open'                    : 'Открыть',
		'Preview with Quick Look' : 'Быстрый просмотр',
		'Select file'             : 'Выбрать файл',
		'New folder'              : 'Новая папка',
		'New text file'           : 'Новый файл',
		'Upload files'            : 'Загрузить файлы',
		'Copy'                    : 'Копировать',
		'Cut'                     : 'Вырезать',
		'Paste'                   : 'Вставить',
		'Duplicate'               : 'Дублировать',
		'Remove'                  : 'Удалить',
		'Rename'                  : 'Переименовать',
		'Edit text file'          : 'Редактировать файл',
		'View as icons'           : 'Иконки',
		'View as list'            : 'Список',
		'Resize image'            : 'Размер изображения',
		'Create archive'          : 'Новый архив',
		'Uncompress archive'      : 'Распаковать архив',
		'Get info'                : 'Свойства',
		'Help'                    : 'Помощь',
		'Dock/undock filemanger window' : 'Отсоединить/присоединить файловый менеджер к странице',
		/* upload/get info dialogs */
		'Maximum allowed files size' : 'Максимальный размер файлов',
		'Add field'   : 'Добавить поле',
		'File info'   : 'Свойства файла',
		'Folder info' : 'Свойства папки',
		'Name'        : 'Имя',
		'Kind'        : 'Тип',
		'Size'        : 'Размер',
		'Modified'    : 'Изменен',
		'Permissions' : 'Доступ',
		'Link to'     : 'Указывает',
		'Dimensions'  : 'Разрешение',
		'Confirmation required' : 'Требуется подтверждение',
		'Are you shure you want to remove files?<br /> This cannot be undone!' : 'Вы уверены, что хотите удалить файл? <br />Действие необратимо.',
		/* permissions */
		'read'        : 'чтение',
		'write'       : 'запись',
		'remove'      : 'удаление',
		/* dates */
		'Jan'         : 'Янв',
		'Feb'         : 'Фев',
		'Mar'         : 'Мар',
		'Apr'         : 'Апр',
		'May'         : 'Май',
		'Jun'         : 'Июнь',
		'Jul'         : 'Июль',
		'Aug'         : 'Авг',
		'Sep'         : 'Сен',
		'Oct'         : 'Окт',
		'Nov'         : 'Ноя',
		'Dec'         : 'Дек',
		'Today'       : 'Сегодня',
		'Yesterday'   : 'Вчера',
		/* mimetypes */
		'Unknown'                           : 'Неизвестный',
		'Folder'                            : 'Папка',
		'Alias'                             : 'Ссылка',
		'Broken alias'                      : 'Битая ссылка',
		'Plain text'                        : 'Обычный текст',
		'Postscript document'               : 'Документ postscript',
		'Application'                       : 'Приложение',
		'Microsoft Office document'         : 'Документ Microsoft Office',
		'Microsoft Word document'           : 'Документ Microsoft Word',  
		'Microsoft Excel document'          : 'Документ Microsoft Excel',
		'Microsoft Powerpoint presentation' : 'Презентация Microsoft Powerpoint',
		'Open Office document'              : 'Документ Open Office',
		'Flash application'                 : 'Приложение Flash',
		'XML document'                      : 'Документ XML',
		'Bittorrent file'                   : 'Bittorrent файл',
		'7z archive'                        : 'Архив 7z',
		'TAR archive'                       : 'Архив TAR',
		'GZIP archive'                      : 'Архив GZIP',
		'BZIP archive'                      : 'Архив BZIP',
		'ZIP archive'                       : 'Архив ZIP',
		'RAR archive'                       : 'Архив RAR',
		'Javascript application'            : 'Приложение Javascript',
		'PHP source'                        : 'Исходник PHP',
		'HTML document'                     : 'Документ HTML',
		'Javascript source'                 : 'Исходник Javascript',
		'CSS style sheet'                   : 'Таблица стилей CSS',
		'C source'                          : 'Исходник C',
		'C++ source'                        : 'Исходник C++',
		'Unix shell script'                 : 'Скрипт Unix shell',
		'Python source'                     : 'Исходник Python',
		'Java source'                       : 'Исходник Java',
		'Ruby source'                       : 'Исходник Ruby',
		'Perl script'                       : 'Скрипт Perl',
		'BMP image'                         : 'Изображение BMP',
		'JPEG image'                        : 'Изображение JPEG',
		'GIF Image'                         : 'Изображение GIF',
		'PNG Image'                         : 'Изображение PNG',
		'TIFF image'                        : 'Изображение TIFF',
		'TGA image'                         : 'Изображение TGA',
		'Adobe Photoshop image'             : 'Изображение Adobe Photoshop',
		'MPEG audio'                        : 'Аудио MPEG',
		'MIDI audio'                        : 'Аудио MIDI',
		'Ogg Vorbis audio'                  : 'Аудио Ogg Vorbis',
		'MP4 audio'                         : 'Аудио MP4',
		'WAV audio'                         : 'Аудио WAV',
		'DV video'                          : 'Видео DV',
		'MP4 video'                         : 'Видео MP4',
		'MPEG video'                        : 'Видео MPEG',
		'AVI video'                         : 'Видео AVI',
		'Quicktime video'                   : 'Видео Quicktime',
		'WM video'                          : 'Видео WM',
		'Flash video'                       : 'Видео Flash',
		'Matroska video'                    : 'Видео Matroska',
		// 'Shortcuts' : 'Клавиши',		
		'Select all files' : 'Выделить все файлы',
		'Copy/Cut/Paste files' : 'Копировать/Вырезать/Вставить файлы',
		'Open selected file/folder' : 'Открыть папку/файл',
		'Open/close QuickLook window' : 'Открыть/закрыть окно быстрого просмотра',
		'Remove selected files' : 'Удалить выделеные файлы',
		'Selected files or current directory info' : 'Информация о выделеных файлах или текущей папке',
		'Create new directory' : 'Новая папка',
		'Open upload files form' : 'Открыть окно загрузки файлов',
		'Select previous file' : 'Выбрать предыдущий файл',
		'Select next file' : 'Выбрать следующий файл',
		'Return into previous folder' : 'Вернуться в предыдущую папку',
		'Increase/decrease files selection' : 'Увеличить/уменьшить выделение файлов',
		'Authors'                       : 'Авторы',
		'Sponsors'  : 'Спонсоры',
		'elFinder: Web file manager'    : 'elFinder: Файловый менеджер для Web',
		'Version'                       : 'Версия',
		'Copyright: Studio 42 LTD'      : 'Copyright: Студия 42',
		'Donate to support project development' : 'Поддержите разработку',
		'Javascripts/PHP programming: Dmitry (dio) Levashov, dio@std42.ru' : 'Программирование Javascripts/php: Дмитрий (dio) Левашов, dio@std42.ru',
		'Python programming, techsupport: Troex Nevelin, troex@fury.scancode.ru' : 'Программирование Python, техподдержка: Troex Nevelin, troex@fury.scancode.ru',
		'Design: Valentin Razumnih'     : 'Дизайн: Валентин Разумных',
		'Spanish localization'          : 'Испанская локализация',
		'Chezh localization'          : 'Чешская локализация',
		'Chinese (traditional) localization'          : 'Китайская (трад.) локализация',
		'Dutch localization'          : 'Голландская локализация',
		'Greek localization'          : 'Греческая локализация',
		'Hungarian localization'          : 'Венгерская локализация',
		'Italian localization'          : 'Итальянская локализация',
		'Latvian localization'          : 'Латвийская локализация',
		'Poland localization'          : 'Польская локализация',
		'Icons' : 'Иконки',
		'License: BSD License'          : 'Лицензия: BSD License',
		'elFinder documentation'        : 'Документация elFinder',
		'Simple and usefull Content Management System' : 'Простая и удобная Система Управления Сайтами',
		'Support project development and we will place here info about you' : 'Поддержите разработку продукта и мы разместим здесь информацию о вас.',
		'Contacts us if you need help integrating elFinder in you products' : 'Если необходима помощь в интеграции elFinder с ваши продуктами, обращайтесь к нам',
		'elFinder support following shortcuts' : 'elFinder поддерживает следующие сочетания клавиш',
		'helpText' : 'elFinder работает аналогично файловому менеджеру в вашем компьютере.<br />Манипулировать файлами можно с помощью кнопок на верхней панели, контекстного меню или сочетания клавиш. Чтобы переместить файлы/папки, просто перенесите их на иконку нужной папки. Если будет зажата клавиша Shift файлы будут скопированы.'
		
	};
	
})(jQuery);
