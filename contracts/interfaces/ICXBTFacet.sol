// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/**
 * @title ICXBTFacet
 * @dev Интерфейс для CXBT Facet - специфические функции токена CXBT
 */
interface ICXBTFacet {
    /**
     * @dev Возвращает разблокированные, заблокированные и общее количество токенов пользователя
     * @param user Адрес пользователя
     * @return unlocked Количество разблокированных токенов
     * @return locked Количество заблокированных токенов
     * @return total Общее количество токенов
     */
    function getTokenBalances(address user) external view returns (
        uint256 unlocked,
        uint256 locked,
        uint256 total
    );

    /**
     * @dev Рассчитывает стоимость разблокировки токенов в PAID
     * @param unlockAmount Количество токенов для разблокировки
     * @return cost Стоимость в PAID токенах
     */
    function calculateUnlockCost(uint256 unlockAmount) external view returns (uint256 cost);

    /**
     * @dev Разблокирует токены через перевод PAID и начисляет награду
     * @param unlockAmount Количество токенов для разблокировки
     * @notice Пользователь должен предварительно одобрить перевод PAID на контракт
     */
    function unlockTokens(uint256 unlockAmount) external;

    /**
     * @dev Добавляет токены в пул наград
     * @param amount Количество токенов для добавления в пул наград
     * @notice Только владелец контракта может вызывать эту функцию
     */
    function addToRewardPool(uint256 amount) external;

    /**
     * @dev Изымает токены из пула наград
     * @param amount Количество токенов для изъятия из пула наград
     * @notice Только владелец контракта может вызывать эту функцию
     */
    function withdrawFromRewardPool(uint256 amount) external;

    /**
     * @dev Устанавливает новый процент разблокировки
     * @param newPercentage Новый процент разблокировки в базисных пунктах (макс 2000 = 20%)
     * @notice Только владелец контракта может вызывать эту функцию
     */
    function setUnlockPercentage(uint256 newPercentage) external;

    /**
     * @dev Функция для минтинга новых токенов (работает даже при паузе)
     * @param to Адрес, на который будут отправлены токены
     * @param amount Количество токенов для минтинга
     * @notice Только владелец контракта может вызывать эту функцию
     */
    function mint(address to, uint256 amount) external;

    /**
     * @dev Функция для приостановки всех транзакций токена
     * @notice Только владелец контракта может вызывать эту функцию
     * @notice Когда контракт приостановлен, переводы токенов невозможны
     */
    function pause() external;

    /**
     * @dev Функция для возобновления работы контракта
     * @notice Только владелец контракта может вызывать эту функцию
     */
    function unpause() external;

    /**
     * @dev Функция для сжигания токенов
     * @param amount Количество токенов для сжигания
     */
    function burn(uint256 amount) external;

    // Events
    event TokensUnlocked(address indexed user, uint256 amount, uint256 paidPaid);
    event RewardPoolAdded(uint256 amount);
    event RewardPoolWithdrawn(uint256 amount);
    event UnlockPercentageChanged(uint256 oldPercentage, uint256 newPercentage);
}
